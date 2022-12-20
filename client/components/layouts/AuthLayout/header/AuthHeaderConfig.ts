type PropTypes = {
    router : {
      route: string
      push: (arg1: string) => void,
    }
};

const ROUTS = {
    SIGN_IN: '/login',
    SIGN_UP: '/register',
};

export const loginHeaderConfigs = ({router} : PropTypes) => {
    const {route} = router;
    
    const headerParams = {
        [ROUTS.SIGN_IN]: {
            btnTitle: 'Sign UP',
            btnClick: () => router.push(ROUTS.SIGN_UP),
        },
        [ROUTS.SIGN_UP]: {
            btnTitle: 'Sign IN',
            btnClick: () => router.push(ROUTS.SIGN_IN),
        }
    };

    return headerParams[route];
};