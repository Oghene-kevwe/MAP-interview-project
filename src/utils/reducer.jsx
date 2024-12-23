export const appReducer = (state, action) => {
  if (action.type === "CLICK_NAV_LINK") {
    return { ...state, activePageId: action.payload };
  }
  if (action.type === "CLICK_SUB_LINK") {
    return { ...state, sublinkPageId: action.payload };
  }

  return state;
};
