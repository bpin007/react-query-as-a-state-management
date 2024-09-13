import { createGlobalState } from "./gobalState";

export const useCounter = createGlobalState("counter", 0);
