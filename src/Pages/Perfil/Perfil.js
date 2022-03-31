import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from '../../Components/Header';
import BreadCumbs from '../../Components/BreadCumbs';
import { CgRename } from 'react-icons/cg';
import { RiBuilding4Line } from 'react-icons/ri';
import { CgWorkAlt } from 'react-icons/cg';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdAddRoad } from 'react-icons/md';
import { FaCity } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { FaUser } from 'react-icons/fa';
import { HiOutlinePencil } from 'react-icons/hi';
import { GrContactInfo } from 'react-icons/gr';
import { BsCreditCard2Back } from 'react-icons/bs';
import { MdOutlineManageAccounts } from 'react-icons/md';

function Perfil() {
    var paises = [
        ['Afganistán', '4'],
        ['Åland', '248'],
        ['Albania', '8'],
        ['Alemania', '276'],
        ['Andorra', '20'],
        ['Angola', '24'],
        ['Anguila', '660'],
        ['Antártida', '10'],
        ['Antigua y Barbuda', '28'],
        ['Arabia Saudita', '682'],
        ['Argelia', '12'],
        ['Argentina', '32'],
        ['Armenia', '51'],
        ['Aruba', '533'],
        ['Australia', '36'],
        ['Austria', '40'],
        ['Azerbaiyán', '31'],
        ['Bahamas', '44'],
        ['Bangladés', '50'],
        ['Barbados', '52'],
        ['Baréin', '48'],
        ['Bélgica', '56'],
        ['Belice', '84'],
        ['Benín', '204'],
        ['Bermudas', '60'],
        ['Bielorrusia', '112'],
        ['Bolivia', '68'],
        ['Bonaire, San Eustaquio y Saba', '535'],
        ['Bosnia y Herzegovina', '70'],
        ['Botsuana', '72'],
        ['Brasil', '76'],
        ['Brunéi', '96'],
        ['Bulgaria', '100'],
        ['Burkina Faso', '854'],
        ['Burundi', '108'],
        ['Bután', '64'],
        ['Cabo Verde', '132'],
        ['Camboya', '116'],
        ['Camerún', '120'],
        ['Canadá', '124'],
        ['Catar', '634'],
        ['Chad', '148'],
        ['Chile', '152'],
        ['China', '156'],
        ['Chipre', '196'],
        ['Colombia', '170'],
        ['Comoras', '174'],
        ['Corea del Norte', '408'],
        ['Corea del Sur', '410'],
        ['Costa de Marfil', '384'],
        ['Costa Rica', '188'],
        ['Croacia', '191'],
        ['Cuba', '192'],
        ['Curazao', '531'],
        ['Dinamarca', '208'],
        ['Dominica', '212'],
        ['Ecuador', '218'],
        ['Egipto', '818'],
        ['El Salvador', '222'],
        ['Emiratos Árabes Unidos', '784'],
        ['Eritrea', '232'],
        ['Eslovaquia', '703'],
        ['Eslovenia', '705'],
        ['España', '724'],
        ['Estados Unidos', '840'],
        ['Estonia', '233'],
        ['Etiopía', '231'],
        ['Filipinas', '608'],
        ['Finlandia', '246'],
        ['Fiyi', '242'],
        ['Francia', '250'],
        ['Gabón', '266'],
        ['Gambia', '270'],
        ['Georgia', '268'],
        ['Ghana', '288'],
        ['Gibraltar', '292'],
        ['Granada', '308'],
        ['Grecia', '300'],
        ['Groenlandia', '304'],
        ['Guadalupe', '312'],
        ['Guam', '316'],
        ['Guatemala', '320'],
        ['Guayana Francesa', '254'],
        ['Guernsey', '831'],
        ['Guinea', '324'],
        ['Guinea-Bisáu', '624'],
        ['Guinea Ecuatorial', '226'],
        ['Guyana', '328'],
        ['Haití', '332'],
        ['Honduras', '340'],
        ['Hong Kong', '344'],
        ['Hungría', '348'],
        ['India', '356'],
        ['Indonesia', '360'],
        ['Irak', '368'],
        ['Irán', '364'],
        ['Irlanda', '372'],
        ['Isla Bouvet', '74'],
        ['Isla de Man', '833'],
        ['Isla de Navidad', '162'],
        ['Islandia', '352'],
        ['Islas Caimán', '136'],
        ['Islas Cocos', '166'],
        ['Islas Cook', '184'],
        ['Islas Feroe', '234'],
        ['Islas Georgias del Sur y Sandwich del Sur', '239'],
        ['Islas Heard y McDonald', '334'],
        ['Islas Malvinas', '238'],
        ['Islas Marianas del Norte', '580'],
        ['Islas Marshall', '584'],
        ['Islas Pitcairn', '612'],
        ['Islas Salomón', '90'],
        ['Islas Turcas y Caicos', '796'],
        ['Islas ultramarinas de Estados Unidos', '581'],
        ['Islas Vírgenes Británicas', '92'],
        ['Islas Vírgenes de los Estados Unidos', '850'],
        ['Israel', '376'],
        ['Italia', '380'],
        ['Jamaica', '388'],
        ['Japón', '392'],
        ['Jersey', '832'],
        ['Jordania', '400'],
        ['Kazajistán', '398'],
        ['Kenia', '404'],
        ['Kirguistán', '417'],
        ['Kiribati', '296'],
        ['Kuwait', '414'],
        ['Laos', '418'],
        ['Lesoto', '426'],
        ['Letonia', '428'],
        ['Líbano', '422'],
        ['Liberia', '430'],
        ['Libia', '434'],
        ['Liechtenstein', '438'],
        ['Lituania', '440'],
        ['Luxemburgo', '442'],
        ['Macao', '446'],
        ['Macedonia', '807'],
        ['Madagascar', '450'],
        ['Malasia', '458'],
        ['Malaui', '454'],
        ['Maldivas', '462'],
        ['Malí', '466'],
        ['Malta', '470'],
        ['Marruecos', '504'],
        ['Martinica', '474'],
        ['Mauricio', '480'],
        ['Mauritania', '478'],
        ['Mayotte', '175'],
        ['México', '484'],
        ['Micronesia', '583'],
        ['Moldavia', '498'],
        ['Mónaco', '492'],
        ['Mongolia', '496'],
        ['Montenegro', '499'],
        ['Montserrat', '500'],
        ['Mozambique', '508'],
        ['Myanmar', '104'],
        ['Namibia', '516'],
        ['Nauru', '520'],
        ['Nepal', '524'],
        ['Nicaragua', '558'],
        ['Níger', '562'],
        ['Nigeria', '566'],
        ['Niue', '570'],
        ['Norfolk', '574'],
        ['Noruega', '578'],
        ['Nueva Caledonia', '540'],
        ['Nueva Zelanda', '554'],
        ['Omán', '512'],
        ['Países Bajos', '528'],
        ['Pakistán', '586'],
        ['Palaos', '585'],
        ['Palestina', '275'],
        ['Panamá', '591'],
        ['Papúa Nueva Guinea', '598'],
        ['Paraguay', '600'],
        ['Perú', '604'],
        ['Polinesia Francesa', '258'],
        ['Polonia', '616'],
        ['Portugal', '620'],
        ['Puerto Rico', '630'],
        ['Reino Unido', '826'],
        ['República Árabe Saharaui Democrática', '732'],
        ['República Centroafricana', '140'],
        ['República Checa', '203'],
        ['República del Congo', '178'],
        ['República Democrática del Congo', '180'],
        ['República Dominicana', '214'],
        ['Reunión', '638'],
        ['Ruanda', '646'],
        ['Rumania', '642'],
        ['Rusia', '643'],
        ['Samoa', '882'],
        ['Samoa Americana', '16'],
        ['San Bartolomé', '652'],
        ['San Cristóbal y Nieves', '659'],
        ['San Marino', '674'],
        ['San Martín', '663'],
        ['San Pedro y Miquelón', '666'],
        ['San Vicente y las Granadinas', '670'],
        ['Santa Elena, Ascensión y Tristán de Acuña', '654'],
        ['Santa Lucía', '662'],
        ['Santo Tomé y Príncipe', '678'],
        ['Senegal', '686'],
        ['Serbia', '688'],
        ['Seychelles', '690'],
        ['Sierra Leona', '694'],
        ['Singapur', '702'],
        ['Sint Maarten', '534'],
        ['Siria', '760'],
        ['Somalia', '706'],
        ['Sri Lanka', '144'],
        ['Suazilandia', '748'],
        ['Sudáfrica', '710'],
        ['Sudán', '729'],
        ['Sudán del Sur', '728'],
        ['Suecia', '752'],
        ['Suiza', '756'],
        ['Surinam', '740'],
        ['Svalbard y Jan Mayen', '744'],
        ['Tailandia', '764'],
        ['Taiwán (República de China)', '158'],
        ['Tanzania', '834'],
        ['Tayikistán', '762'],
        ['Territorio Británico del Océano Índico', '86'],
        ['Tierras Australes y Antárticas Francesas', '260'],
        ['Timor Oriental', '626'],
        ['Togo', '768'],
        ['Tokelau', '772'],
        ['Tonga', '776'],
        ['Trinidad y Tobago', '780'],
        ['Túnez', '788'],
        ['Turkmenistán', '795'],
        ['Turquía', '792'],
        ['Tuvalu', '798'],
        ['Ucrania', '804'],
        ['Uganda', '800'],
        ['Uruguay', '858'],
        ['Uzbekistán', '860'],
        ['Vanuatu', '548'],
        ['Vaticano, Ciudad del', '336'],
        ['Venezuela', '862'],
        ['Vietnam', '704'],
        ['Wallis y Futuna', '876'],
        ['Yemen', '887'],
        ['Yibuti', '262'],
        ['Zambia', '894'],
        ['Zimbabue', '716'],
    ];
    return (
        <PerfilContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Header />
            <PerfilContent>
                <BreadCumbs titulo="Perfil" />
                <PerfilBox>
                    <PerfilLeftBox>
                        <div className="perfilLeft__list">
                            <ul>
                                <li>
                                    <div className="perfilLeft__list__item">
                                        <GrContactInfo />
                                        Información
                                    </div>
                                </li>
                                <li>
                                    <div className="perfilLeft__list__item">
                                        <BsCreditCard2Back />
                                        Medios de pago
                                    </div>
                                </li>
                                <li>
                                    <div className="perfilLeft__list__item">
                                        <MdOutlineManageAccounts />
                                        Cuenta
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </PerfilLeftBox>
                    <PerfilRightBox>
                        <div className="perfilTop">
                            <div className="perfilTop__img">
                                <FaUser size={130} />
                                <div className="perfilTop__img__button">
                                    <HiOutlinePencil />
                                </div>
                            </div>
                            <div className="perfilTop__list__gridContainer">
                                <div className="perfilTop__list__gridContainer__column">
                                    <ul>
                                        <li>
                                            <span className="perfilTop__list__gridContainer__label">Nombre</span>
                                            <span className="perfilTop__list__gridContainer__label--secondary">Jose Miguel Acosta Carias</span>
                                        </li>
                                        <li>
                                            <span className="perfilTop__list__gridContainer__label">Empresa</span>
                                            <span className="perfilTop__list__gridContainer__label--secondary">Grupo ASICA S.A. de C.V.</span>
                                        </li>
                                        <li>
                                            <span className="perfilTop__list__gridContainer__label">Cargo</span>
                                            <span className="perfilTop__list__gridContainer__label--secondary">IT Junior</span>
                                        </li>
                                        <li>
                                            <span className="perfilTop__list__gridContainer__label">País</span>
                                            <span className="perfilTop__list__gridContainer__label--secondary">Honduras</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="perfilTop__list__gridContainer__column">
                                    <ul>
                                        <li>
                                            <span className="perfilTop__list__gridContainer__label">Genero</span>
                                            <span className="perfilTop__list__gridContainer__label--secondary">Masculino</span>
                                        </li>

                                        <li>
                                            <span className="perfilTop__list__gridContainer__label">Teléfono</span>
                                            <span className="perfilTop__list__gridContainer__label--secondary">+50432206770</span>
                                        </li>
                                        <li>
                                            <span className="perfilTop__list__gridContainer__label">Dirección</span>
                                            <span className="perfilTop__list__gridContainer__label--secondary">Res. Altos del Trapiche</span>
                                        </li>
                                        <li>
                                            <span className="perfilTop__list__gridContainer__label">Ciudad</span>
                                            <span className="perfilTop__list__gridContainer__label--secondary">Tegucigalpa</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="perfilBottom">
                            <div className="perfilBottom__gridContainer">
                                <div className="perfilBottom__gridContainer__inputContainer">
                                    <span className="perfilBottom__gridContainer__inputContainer__label">Nombre</span>
                                    <div className="perfilBottom__gridContainer__inputContainer__input-box">
                                        <CgRename />
                                        <input type="text" value="Jose Miguel Acosta Carias" />
                                    </div>
                                </div>
                                <div className="perfilBottom__gridContainer__inputContainer">
                                    <span className="perfilBottom__gridContainer__inputContainer__label">Empresa</span>
                                    <div className="perfilBottom__gridContainer__inputContainer__input-box">
                                        <RiBuilding4Line />
                                        <input type="text" value="Grupo ASICA S.V. de C.V." />
                                    </div>
                                </div>
                                <div className="perfilBottom__gridContainer__inputContainer">
                                    <span className="perfilBottom__gridContainer__inputContainer__label">Cargo</span>
                                    <div className="perfilBottom__gridContainer__inputContainer__input-box">
                                        <CgWorkAlt />
                                        <input type="text" value="IT Junior" />
                                    </div>
                                </div>
                                <div className="perfilBottom__gridContainer__inputContainer">
                                    <span className="perfilBottom__gridContainer__inputContainer__label">Genero</span>
                                    <div className="perfilBottom__gridContainer__inputContainer__input-box">
                                        <BsGenderAmbiguous />
                                        <select name="genero" id="">
                                            <option value="Seleccion" disabled>
                                                Seleccione
                                            </option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Femenino">Femenino</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="perfilBottom__gridContainer__inputContainer">
                                    <span className="perfilBottom__gridContainer__inputContainer__label">Teléfono</span>
                                    <div className="perfilBottom__gridContainer__inputContainer__input-box">
                                        <AiOutlinePhone />
                                        <input type="text" value="+50432206770" />
                                    </div>
                                </div>
                                <div className="perfilBottom__gridContainer__inputContainer">
                                    <span className="perfilBottom__gridContainer__inputContainer__label">Dirección</span>
                                    <div className="perfilBottom__gridContainer__inputContainer__input-box">
                                        <MdAddRoad />
                                        <input type="text" value="Res. Altos del trapiche" />
                                    </div>
                                </div>
                                <div className="perfilBottom__gridContainer__inputContainer">
                                    <span className="perfilBottom__gridContainer__inputContainer__label">Ciudad</span>
                                    <div className="perfilBottom__gridContainer__inputContainer__input-box">
                                        <FaCity />
                                        <input type="text" value="Tegucigalpa" />
                                    </div>
                                </div>
                                <div className="perfilBottom__gridContainer__inputContainer">
                                    <span className="perfilBottom__gridContainer__inputContainer__label">País</span>
                                    <div className="perfilBottom__gridContainer__inputContainer__input-box">
                                        <GoLocation />
                                        <select name="genero" id="">
                                            <option value="Seleccione" disabled>
                                                Seleccione
                                            </option>
                                            {paises.map(pais => (
                                                <option value={pais[0]}>{pais[0]}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="perfilBottom__buttonsContainer">
                                <div className="perfilBottom__buttonsContainer__button">Guardar</div>
                            </div>
                        </div>
                    </PerfilRightBox>
                </PerfilBox>
            </PerfilContent>
        </PerfilContainer>
    );
}

export default Perfil;

const PerfilContainer = styled(motion.div)``;

const PerfilContent = styled(motion.div)`
    margin: 0 20%;
`;

const PerfilBox = styled(motion.div)`
    display: flex;
    margin-top: 2em;
`;

const PerfilLeftBox = styled(motion.div)`
    min-height: 600px;
    border-right: 1px solid #eeee;
    flex: 0.2;
    margin-right: 2em;

    ul {
        margin: 0;
        padding: 0;

        li {
            cursor: pointer;
            padding: 1em;
            list-style: none;
        }
    }

    .perfilLeft__list {
        font-size: 0.8;
        line-height: 1;
        .perfilLeft__list__item {
            display: flex;
            align-items: center;

            svg {
                margin-right: 1em;
            }
        }
    }
`;

const PerfilRightBox = styled(motion.div)`
    flex: 0.8;
    padding: 1em 2em;
    font-size: 0.5;

    ul {
        margin: 0;
        padding: 0;

        li {
            list-style: none;
            line-height: 1;
            display: flex;
            margin-bottom: 0.7em;
            flex-direction: column;
        }
    }

    .perfilTop {
        display: flex;

        .perfilTop__img {
            position: relative;
            background-color: #eeee;
            width: 10em;
            height: 10em;
            margin-right: 2em;
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                color: darkGray;
            }

            .perfilTop__img__button {
                line-height: 0;
                position: absolute;
                border-radius: 50%;
                background-color: white;
                padding: 0.4em;
                bottom: 10px;
                right: 10px;
                cursor: pointer;
                color: darkGray;
            }
        }

        .perfilTop__list__gridContainer {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            margin-bottom: 1em;
            grid-column-gap: 2em;
        }

        .perfilTop__list__gridContainer__label {
            font-size: 0.8em;
            color: darkGray;
        }

        .perfilTop__list__gridContainer__label--secondary {
            font-size: 0.9em;
        }
    }

    .perfilBottom {
        /*         display: flex;
 */

        .perfilBottom__gridContainer {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 0.5em;
            max-width: 600px;
            margin-bottom: 2em;
        }

        .perfilBottom__gridContainer__inputContainer__label {
            color: darkGray;
            font-size: 0.8em;
            line-height: 2;
        }

        .perfilBottom__gridContainer__inputContainer__input-box {
            border-radius: 8px;
            border: 1px solid darkGray;
            background-color: white;
            padding: 0.5em 0.8em;
            line-height: 1;
            display: flex;
            align-items: center;
            width: max-width;
            max-width: 200px;

            svg {
                color: darkGray;
                margin-right: 1em;
            }

            input,
            select {
                background-color: transparent;
                border: none;
                width: 100%;
                outline: none;
            }
        }

        .perfilBottom__buttonsContainer {
            .perfilBottom__buttonsContainer__button {
                padding: 0.8em 1.2em;
                border-radius: 8px;
                background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
                transition: background-color 0.3s;
                cursor: pointer;
                color: white;
                font-size: 0.8em;
                width: fit-content;

                :hover {
                    background-color: ${process.env.REACT_APP_SECONDARY_COLOR_HOVER};
                }
            }
        }
    }
`;
