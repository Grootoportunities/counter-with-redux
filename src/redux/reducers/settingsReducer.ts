export type SettingsStateType = { settings: boolean };

type ActionsType = ReturnType<typeof setSettingsAC>; //| SetLocalStorageValueAT;

const initialState: SettingsStateType = { settings: false };

export const settingsReducer = (
  state: SettingsStateType = initialState,
  action: ActionsType,
): SettingsStateType => {
  switch (action.type) {
    case "SET-SETTINGS":
      return { ...state, settings: action.settings };

    default:
      return state;
  }
};

export const setSettingsAC = (settings: boolean) =>
  ({
    type: "SET-SETTINGS",
    settings,
  }) as const;
