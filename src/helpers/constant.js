import logo from "../assets/netflix-4u.jpg";
export const MAIN_IMG = logo;
export const AVATAR_URL = "https://tchblg.de/wp-content/uploads/user-avatar.png";
export const POSTER_PATH = import.meta.env.VITE_IMAGE_PATH;

export const LANGUAGES = [
    {code: "en", name:"english"},
    {code: "fr", name:"french"},
    {code: "es", name:"spanish"}
]

export const SignUp_LANG_ARRAY = {
    en: {
        title: "Unlimited movies, TV shows, and more",
        subTitle: "Watch anywhere. Cancel anytime.",
        desc: "Ready to watch? Enter your email to create or restart your membership.",
        button: "Get Started",
        name: "Name",
        email:"Email",
        password: "Password",
        hButton: "Sign In",


    },
    es: {
        title: "Películas, programas de televisión y más ilimitados",
        subTitle: "Mira en cualquier lugar. Cancelar en cualquier momento",
        desc: "¿Listo para mirar? Ingrese su correo electrónico para crear o reiniciar su membresía.",
        button: "Empezar",
        name: "Nombre",
        email:"Correo electrónico",
        password: "Contraseña",
        hButton: "Iniciar sesión",
        
    },
    fr: {
        title:"Films, émissions de télévision et plus illimités",
        subTitle: "Regardez n'importe où. Annuler à tout moment",
        desc: "Prêt à regarder ? Entrez votre email pour créer ou redémarrer votre adhésion.",
        button: "Commencer",
        name: "Nom & Prenom",
        email:"E-mail",
        password: "Mot de passe",
        hButton: "Se connecter",
        
    }
}

export const SignIn_LANG_ARRAY = {
    en:{
        email:"Email",
        password: "Password",
        Button: "Sign In",
        text: "New to Netflix?",
        link: "Sign up now.",
        desc: "This page is protected by Google reCAPTCHA to ensure you're not a bot",
        descLink: "Learn more.",

    },
    es: {
        email:"Correo electrónico",
        password: "Contraseña",
        Button: "Iniciar sesión",
        text: "Nuevo (Nueva) en netflix",
        link:"Regístrate ahora",
        desc: "Esta página está protegida por Google reCAPTCHA para garantizar que no seas un bot.",
        descLink: "Aprende más",
    },
    fr: {
        email:"E-mail",
        password: "Mot de passe",
        Button: "Se connecter",
        descLink:"Apprendre encore plus",
        desc:"Cette page est protégée par Google reCAPTCHA pour garantir que vous n'êtes pas un robot",
        link:"s'inscrire maintenant",
        text:"Nouveau sur Netflix",

    }
}

