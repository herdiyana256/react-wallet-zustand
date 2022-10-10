import create from 'zustand';

const initialUser = { first_name: 'Monica' };
const initialBalance = 100000;

const useWalletStore = create((set) => ({
  user: initialUser,
  balance: initialBalance
}));

// selector bisa dibuat di sini, biar bisa reusesable
export const selectBalance = (state) => state.balance;
export const selectUser = (state) => state.user;

export default useWalletStore;
