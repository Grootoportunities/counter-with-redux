type StateType = {
  settings: boolean;
  maxValue: number;
  minValue: number;
  count: number;
};

type ActionsType = SetSettingsAT | SetMaxValueAT | SetMinValueAT | SetCountAT;

type SetCountAT = ReturnType<typeof setCountAC>;
type SetSettingsAT = ReturnType<typeof setSettingsAC>;
type SetMaxValueAT = ReturnType<typeof setMaxValueAC>;
type SetMinValueAT = ReturnType<typeof setMinValueAC>;

export const reducer = (state: StateType, action: ActionsType): StateType => {
  switch (action.type) {
    case "SET-COUNT":
      return { ...state, count: action.value };

    case "SET-MIN-VALUE":
      return { ...state, minValue: action.value };

    case "SET-MAX-VALUE":
      return { ...state, maxValue: action.value };

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

export const setMaxValueAC = (value: number) =>
  ({
    type: "SET-MAX-VALUE",
    value,
  }) as const;

export const setMinValueAC = (value: number) =>
  ({
    type: "SET-MIN-VALUE",
    value,
  }) as const;

export const setCountAC = (value: number) =>
  ({
    type: "SET-COUNT",
    value,
  }) as const;
