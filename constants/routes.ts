const ROUTES = Object.freeze({
  home: "/",
  login: "/login",
  register: "/register",
  boards: "/boards",
  boardDetails: (boardId: string) => `/boards/${boardId}`,
  boardMembers: (boardId: string) => `/boards/${boardId}/members`,
});

export default ROUTES;
