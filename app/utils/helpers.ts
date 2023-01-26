export const isEmpty = (value: any) => {
  return value == null;
};

export const parseBooleanFromString = (value: string | null | undefined) => {
  return value?.trim() === "true";
};
