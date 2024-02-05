export default function getEnv(env){


    if (process.env.NODE_ENV === 'production'){
        return window?._env_[env];
    }else{
        //TODO handle dev environment
        return null;
    }

}