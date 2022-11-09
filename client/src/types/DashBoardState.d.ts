type DashboardState = {
  dashboard: {
    active: number;
    total: number;
    completed: number;
  };
  total: {
    totalCompletionRate: number;
    activeTests: number;
    completedTests: number;
  };
  month: {
    multiChoiceQuestion: number;
    assignment: number;
    exam: number;
  };
};

export const DashboardState;
