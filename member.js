function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'views/member/skills.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
        member:'='
    }
  };
}