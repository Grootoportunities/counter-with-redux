export type CounterStateType = {
  maxValue: number;
  minValue: number;
  count: number;
};

type ActionsType = SetMaxValueAT | SetMinValueAT | SetCountAT;

type SetCountAT = ReturnType<typeof setCountAC>;
type SetMaxValueAT = ReturnType<typeof setMaxValueAC>;
type SetMinValueAT = ReturnType<typeof setMinValueAC>;

const initialState: CounterStateType = {
  maxValue: 1,
  minValue: 0,
  count: 0,
};

export const counterReducer = (
  state: CounterStateType = initialState,
  action: ActionsType,
): CounterStateType => {
  switch (action.type) {
    case "SET-COUNT":
      return { ...state, count: action.value };

    case "SET-MIN-VALUE":
      return { ...state, minValue: action.value };

    case "SET-MAX-VALUE":
      return { ...state, maxValue: action.value };

    default:
      return state;
  }
};

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
