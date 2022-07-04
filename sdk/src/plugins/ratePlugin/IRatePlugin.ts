import * as anchor from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { RateMock } from "../../../../../target/types/rate_mock";
import { RateState } from "./rateMock/RateState";

export interface IRatePlugin {
    program: anchor.Program<RateMock>;
    provider: anchor.AnchorProvider;
    rateStateId: PublicKey;
    getProgramId(): PublicKey;
    getRatePluginState(rateStateId?: PublicKey): Promise<RateState>;
    getSetFairValueIX(fairValue: number): Promise<anchor.web3.TransactionInstruction>;
    initialize(): Promise<void>;
}