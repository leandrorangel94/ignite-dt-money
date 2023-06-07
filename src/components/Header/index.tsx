import { useState } from "react";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] =
    useState<boolean>();

  function handleTransactionModalOpenChange(value: boolean) {
    setIsTransactionModalOpen(value);
  }

  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="" />

          <Dialog.Root
            open={isTransactionModalOpen}
            onOpenChange={handleTransactionModalOpenChange}
          >
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal
              handleTransactionModalOpenChange={setIsTransactionModalOpen}
            />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  );
}
