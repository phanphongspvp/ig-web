import { initState } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import { StateAuth } from '@/types/auth';
import { Module } from 'vuex';

export const auth: Module<StateAuth, any> = {
  state: initState(),
  mutations,
  actions,
  getters
};