import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'SURVEILLANCE ET ACCUEIL',
        description: 'La surveillance statique ou fixe consiste en la présence physique d’agents armés ou non, dont l’action peut être entreprise en tenue de civil (costume) ou uniforme. Une surveillance active permet de prévenir des irrégularités, les intrusions non autorisées, éviter les effractions, agressions, tentatives de vandalisme ou autres dommages vis-à-vis des personnes ou des biens.'
    },
    {
        icon: <FiLayers />,
        title: 'SERVICE D\'HUISSIER - LOGE',
        description: 'Le personnel spécialisé de Comenco Protection est formé pour gérer parfaitement l’accueil, le contrôle d’accès, la vidéosurveillance, ou tout autre service de loge ou de sécurité. La gestion de services par l’intermédiaire d’une société externe telle que Comenco Protection a pour avantage d’apporter une grande rigueur professionnelle pour une protection maximale vis-à-vis des questions d’accès et de sécurité par des spécialistes.'
    },
    {
        icon: <FiUsers />,
        title: 'SERVICE DE PATROUILLE, RONDE',
        description: 'Nos agents en uniforme ou en civil patrouillent sur les différents sites, que se soit pour des privés ou professionnels afin de s’assurer que tout soit conforme et sécurisé. Ces patrouilles peuvent être effectuées selon un horaire fixe ou irrégulier. Il s’agit d’un service flexible permettant aussi de compléter les services d’alarme et de vidéosurveillance.'
    },
    {
        icon: <FiMonitor />,
        title: 'SERVICE D’INTERVENTION',
        description: 'Après un déclanchement d’alarme ou d’appel du client, les agents interviennent rapidement sur place afin d’agir pour les besoins sécuritaires imprévus et prendre les mesures de sécurité nécessaires à une situation délicate qui peu être physique, technique, ou matériel.'
    },
    {
        icon: <FiUsers />,
        title: 'GESTION D’ALARMES',
        description: 'Comenco Protection assure la gestion d’alarmes en partenariat avec une centrale de gestion d’alarmes. Ceci permet d’assurer non seulement la réception et le traitement prioritaire des alarmes, mais aussi le déclenchement et le suivi des interventions qui en découlent. Ce service peut être complémentaire au service d’intervention et de patrouille.'
    },
    {
        icon: <FiMonitor />,
        title: 'GESTION DE CIRCULATION',
        description: 'Nos agents spécialisés et formés, agréés par la police pour la gestion de circulation, assurent la gestion du trafic pour des chantiers, voies publiques..,et avec tout l’équipement nécessaire, Nous vous offrons un service complet et compétent. Possibilité de mettre à disposition de contenaire à badge (autre système possible) pour une sécurité optimale.'
    },
    {
        icon: <FiUsers />,
        title: 'PROTECTION RAPPROCHÉE',
        description: 'Elle est effectuée par des agents expérimentés et spécialement formés, armées ou non, qui a pour but de protéger des personnes potentiellement ou menacées par toutes types d’agressions. Celle-ci est assurée en fonction des besoins, 24/24, 7/7j ou de manière ponctuelle avec toute la discrétion souhaitée ce sur le territoire suisse ou bien à l’étranger. Des agents de sexe masculine ou féminin, parlant plusieurs langues sont à votre disposition. Des véhicules peuvent être mis à disposition.'
    },
    {
        icon: <FiMonitor />,
        title: 'TRANSPORT SÉCURISÉ',
        description: 'Nous pouvons mettre à la disposition de notre clientèle des agents armés ou non pour des transports sécurisés de valeurs et de fonds avec une flexibilité et les besoin existants. Transport pédestre, accompagné ou non, avec véhicule banalisé ou véhicule blindé. Nous pouvons aussi vous offrir un service de chauffeur (Limousine), réalisé par des agents armés ou non, pour assurer le transport de personnes à l’endroit souhaité avec toutes les précautions nécessaires.'
    },
    {
        icon: <FiUsers />,
        title: 'SÉCURITÉ ÉVÉNEMENTIELLE',
        description: 'Pour une surveillance dans des établissements ou événement publics ou privés (entreprise, accueil delecation, boutique de luxe, ventes au enchères, restaurant, concerts etc.) fait également partie des prestations offertes par Comenco Protection. Les agents accueillent la clientèle, filtrent les causeurs de trouble afin de prévenir les agressions ou toute autre forme de violence à l’égard de personnes ou de biens et ils assurent la sécurité sur place. Le service est opéré par des agents armés ou non, en civil ou en uniforme. Les patrouilles se relaient pour assurer la sécurité du site en question, selon les directives établies en collaboration avec le client.'
    },
    {
        icon: <FiMonitor />,
        title: 'SÉCURITÉ CHANTIER',
        description: 'Avant, pendant et après les travaux : Nos agents spécialisés assurent une gestion de la sécurité sur place pour permettre aux ouvriers de travailler en toute sécurité et prévenir des accidents. Ceci par un agent statique pour sécuriser l’entrée d’un chantier ou la gestion de circulation par un agent autorisé et agrée spécifiquement (obligatoire pour la gestion de trafic!) sur des chantiers, les voies publiques ou autoroutes etc… Il s’agit d’une régulation des entrées/sorties (selon directives du client) et/ou une gestion du trafic routier afin d’assurer la sécurité et la fluidité du trafic autour du chantier.'
    },
    {
        icon: <FiUsers />,
        title: 'DÉTECTIVE PRIVÉ, FILATURE',
        description: 'Nous vous offrons des services d’investigation, d’enquêtes et de filatures pour le compte privé ou professionnel. Nos agents sont des professionnels, agrées et titulaires d’une carte de légitimation délivrée par le département de la Sécurité Suisse.'
    },
    {
        icon: <FiMonitor />,
        title: 'CONSEILS & SECURITY RISK MANAGEMENT',
        description: 'Pour un conseil de spécialise, dans l’étude des risques et la réalisation de tout concept en sécurité, quel que soit la taille du projet, selon les besoins des clients par un service adapté et personnalisé. En ce qui concerne le matériel et la gestion, Comenco Protection est à la pointe du progrès technologique et humain, ce qui lui permet d’offrir des prestations complètes et compétitives. Nous demeurons à l’écoute de nos clients afin de combler leurs attentes, réagir au changement et s’adapter à l’évolution du marché.'
    },
    {
        icon: <FiUsers />,
        title: 'Détection du port de masque',
        description: ''
    },
    {
        icon: <FiMonitor />,
        title: 'Calcul de la distance sociale',
        description: ''
    },
    {
        icon: <FiUsers />,
        title: 'Détection d’incidents (chutes, mouvement de foule, agression, etc.)',
        description: ''
    },
    {
        icon: <FiMonitor />,
        title: 'Détection d’intrusions dans des espaces privées (zone réservée au staff, etc.)',
        description: ''
    },
    {
        icon: <FiUsers />,
        title: 'Détection d\'objets interdits (armes, etc.)',
        description: ''
    },
    {
        icon: <FiMonitor />,
        title: 'Détection d\'objets abandonnés',
        description: ''
    },
    {
        icon: <FiUsers />,
        title: 'Suivi du parcours d\'une personne via les différentes caméras',
        description: ''
    },

]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);

        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                          <a >
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
