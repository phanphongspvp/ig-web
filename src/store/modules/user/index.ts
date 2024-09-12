import { Module } from 'vuex';
import { initState } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { StateUser } from '@/types/user';

export const user: Module<StateUser, any> = {
  state: initState(),
  mutations,
  actions,
  getters
};