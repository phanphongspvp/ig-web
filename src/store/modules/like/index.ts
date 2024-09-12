import { Module } from 'vuex';
import { initState } from './state';
import { mutations } from './mutations';
import { actions } from './actions';
import { StateLike } from '@/types/like';

export const like: Module<StateLike, any> = {
  state: initState(),
  mutations,
  actions
};