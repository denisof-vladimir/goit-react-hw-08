
import tasksReducer from './tasks/slice';
import authReducer from './auth/slice';

const persistedAuthReducer = persistReducer(
  {
    key: 'user-token',
    storage,
    whitelist: ['token'],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);