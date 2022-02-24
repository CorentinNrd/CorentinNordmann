import React from "react";
import '../../css/App.css';
import '../../css/Queries.css';
import '../../css/bootstrap.min.css';
import TwitchImg from '../../assets/twitchScreen.png';
import TwitterImg from '../../assets/TwitterScreen.png'
import Previously from '../../assets/PrevOn.png';

const Body = () => {
    return (
        <div>
            <div className="margin"></div>

            <section id="content">
                <div id="content-inner">
                    <div className="card" id="card_twitch" style={{ width: "60%" }}>
                        <img id="twitch" src={TwitchImg} alt="chargement" />
                        <input type="checkbox" id="toggleTwitch" />
                        <dialog id="dialogTwitch">
                            <h4 className="text-center">Projet <a href="https://github.com/CorentinNrd/Udemy-Projet-Twitch"
                                target="blank">twitch</a></h4>
                            <div className="text">
                                <span>
                                    Projet réalisé seul sur Udemy.
                                    <br /><br />
                                    J'ai réalisé ce projet pour apprendre à utiliser ReactJS avec une API.
                                    <br /><br />
                                    Axios m'a servi à faire les calls à l'API pour pouvoir récupérer les informations dont
                                    j'avais
                                    besoin.
                                    <br /><br />
                                    Comme exemple, j'ai pu récupérer les catégories de jeux (ce qui m'a servi pour les jeux les
                                    plus
                                    populaires), mais aussi le pseudo des streameur le nombre de viewers quand ils sont en live,
                                    le
                                    jeu auquel ils jouent ainsi que le service vidéo et le tchat de twitch.
                                    <br /><br />
                                    En faisant ce projet sur mon temps personnel j'ai pu me familiariser avec React et les calls
                                    API
                                    mais aussi faire un projet que je trouvais très intéressant.
                                </span>
                            </div>
                            <div id="divCloseTwitch">
                                <label id="closeTwitch" htmlFor="toggleTwitch">Fermer</label>
                            </div>
                        </dialog>
                    </div>
                    <label id="seeTwitch" htmlFor="toggleTwitch">Détails du projet</label>

                    <div className="card" id="card_twitter" style={{ width: "60%" }}>
                        <img id="twitter" src={TwitterImg} alt="chargement" />
                        <input type="checkbox" id="toggleTwitter" />
                        <dialog id="dialogTwitter">
                            <h4 className="text-center">Projet <a href="https://github.com/CorentinNrd/Udemy_Project_Twitter"
                                target="blank">twitter</a></h4>
                            <div className="text">
                                <span>
                                    J'ai réalisé ce projet suite à un projet similaire avec la Web@cadémie.
                                    <br /><br />
                                    Ce projet n'est pas encore terminé, pour le moment nous, pouvons nous inscrire, nous
                                    connecter, écrire un post et le poster liker le post, retweeter le post, commenter le post
                                    ainsi que visualiser les commentaires, le nombre de likes et de retweets, nous avons aussi
                                    accès aux profils d'autres utilisateurs ainsi que le sien, et pouvons suivre d'autres
                                    utilisateurs et se faire suivre.
                                    <br /><br />
                                    Twitter est très intéressant comme projet car, j'ai pu prendre un main nodeJS et mongoDB
                                    ainsi qu'express, pug et socket.IO, c'est un projet que j'apprécie énormément.
                                </span>
                            </div>
                            <div id="divCloseTwitter">
                                <label id="closeTwitter" htmlFor="toggleTwitter">Fermer</label>
                            </div>
                        </dialog>
                    </div>
                    <label id="seeTwitch" htmlFor="toggleTwitter">Détails du projet</label>

                    <div className="card" id="card_prev" style={{ width: "60%" }}>
                        <img id="prev" src={Previously} alt="chargement" />
                        <input type="checkbox" id="togglePrev" />
                        <dialog id="dialogPrev">
                            <h4 className="text-center">Projet <a href="#"
                                target="blank">Previously_On</a></h4>
                            <div className="text">
                                <span>
                                    Ce projet a été réalisé en groupe de 2.
                                    <br />
                                    Pour ce projet nous avions dû créer une plateforme permettant de suivre ses films ou séries (similaire au principe de TV-Time).
                                    <br /><br />
                                    Nous devions utiliser l'API de Betaseries afin de nous authentifier avec celle-ci et créer toutes nos requêtes.
                                    <br /><br />
                                    Dans ce projet nous avons pu développer nous avons utiliser NodeJs pour récupérer les informations à l'authentification et ReactJs
                                    pour la partie front du projet.
                                    <br /><br />
                                    Previously_On était un projet de spécialisation, nous permettant de vraiment appronfondir nos acquis sur les technos de nos choix.
                                </span>
                            </div>
                            <div id="divClosePrev">
                                <label id="closePrev" htmlFor="togglePrev">Fermer</label>
                            </div>
                        </dialog>
                    </div>
                    <label id="seePrev" htmlFor="togglePrev">Détails du projet</label>

                </div>
            </section>

            <div className="margin"></div>
        </div>
    )
}

export default Body;