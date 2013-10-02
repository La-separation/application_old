function navigation(step) {
	
	var nextStep = '';
	
	switch(step)
	{
		case 'introduction':
			nextStep = introductionStage();
		break;
		case 'mainMenu':
			nextStep = initMainMenu();
		break;
		default:
			nextStep = 'introduction';
	}
	navigation(nextStep);
}