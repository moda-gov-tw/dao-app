import { useMemo } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

import { DHLayout, useDHConnect } from "@daohaus/connect";
import { TXBuilder } from "@daohaus/tx-builder";
import { ValidNetwork } from "@daohaus/keychain-utils";
import { CurrentDaoProvider, useDaoData } from "@daohaus/moloch-v3-hooks";
import { HeaderAvatar } from "../HeaderAvatar";

export const DaoContainer = () => {
  const { proposalId, memberAddress, daoChain, daoId } = useParams<{
    daoChain: ValidNetwork;
    daoId: string;
    proposalId: string;
    memberAddress: string;
  }>();

  if (!daoId || !daoChain) return null;

  return (
    <Dao
      daoId={daoId}
      daoChain={daoChain}
      proposalId={proposalId}
      memberAddress={memberAddress}
    />
  );
};

const Dao = ({
  daoId,
  daoChain,
  proposalId,
  memberAddress,
}: {
  daoId: string;
  daoChain: ValidNetwork;
  proposalId?: string;
  memberAddress?: string;
}) => {
  const location = useLocation();

  const { publicClient, address } = useDHConnect();
  const { dao } = useDaoData({
    daoId: daoId as string,
    daoChain: daoChain as string,
  });

  const routePath = `molochv3/${daoChain}/${daoId}`;

  const navLinks = useMemo(() => {
    let baseLinks = [
      { label: "首頁", href: `https://www.plurality.moda.gov.tw/` },
      { label: "DAO", href: `/${routePath}` },
      { label: "多簽金庫", href: `/${routePath}/safes` },
      { label: "提案", href: `/${routePath}/proposals` },
      { label: "成員", href: `/${routePath}/members` },
      { label: "設定", href: `/${routePath}/settings` },
    ];

    return address
      ? [
          ...baseLinks,
          { label: "資料", href: `/${routePath}/member/${address}` },
        ]
      : baseLinks;
  }, [daoChain, daoId, address]);

  return (
    <DHLayout
      pathname={location.pathname}
      navLinks={navLinks}
      leftNav={
        dao?.name &&
        dao?.id && (
          <HeaderAvatar
            name={dao.name}
            address={dao.id}
            imgUrl={dao?.avatarImg}
          />
        )
      }
    >
      <CurrentDaoProvider
        userAddress={address}
        targetDao={{
          daoChain: daoChain,
          daoId: daoId,
          proposalId,
          memberAddress,
        }}
      >
        <TXBuilder
          publicClient={publicClient}
          chainId={daoChain}
          daoId={daoId}
          safeId={dao?.safeAddress}
          appState={{ dao, memberAddress: address }}
        >
          <Outlet />
        </TXBuilder>
      </CurrentDaoProvider>
    </DHLayout>
  );
};
