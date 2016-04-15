angular.module('starter.controllers', ['pascalprecht.translate', 'ngCordova'])

.directive('focusMe', function ($timeout) {
    return {
        link: function (scope, element, attrs) {
            $timeout(function () {
                element[0].focus();
            }, 150);
        }
    };
})

.run(function ($ionicPlatform, $ionicPopup) {
    $ionicPlatform.ready(function () {

    });
})

.factory('xmlParser', function () {
    var x2js = new X2JS();
    return {
        xml2json: function (args) {
            return angular.bind(x2js, x2js.xml2json, args)();
        },
        xml_str2json: function (args) {
            return angular.bind(x2js, x2js.xml_str2json, args)();
        },
        json2xml_str: function (args) {
            return angular.bind(x2js, x2js.json2xml_str, args)();
        }
    }
})

// Set or get login values
.service('JsonService', function () {
    console.log("SearchValueService setup done");
    return {

        // get or set userdata
        setJson: function (full_jsondata) {
            window.localStorage['full_jsondata'] = JSON.stringify(full_jsondata);
            console.log("full_jsondata setted: " + JSON.stringify(full_jsondata));
        },
        getJson: function () {
            var full_jsondata = JSON.parse(window.localStorage['full_jsondata'] + "");
            console.log("full_jsondata got: " + JSON.stringify(full_jsondata));

            return full_jsondata;
        }
    }
})

// Translations
.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
        'ENTERLOGINDATA': 'Please fill in your DuerrDental.NET personal login data:',
        'ENTERLOGINDATAMESSAGE': 'Please fill in the missing data',
        'FORGOTDATABUTTON': 'Password?',
        'REGISTERBUTTON': 'Register?',
        'SERVICEBUTTON': 'Contact service',
        'LOGINBUTTON': 'Login',
        'DEMOBUTTON': 'Guest user',
        'REMEMBERLOGINDATABUTTON': 'Save login data',
        'LASTSEARCHESHEADER': 'Last search',
        'SEARCHBUTTONSTART': 'Search',
        'SCANBUTTONSTART': 'Scan code',
        'SCANBUTTONMENU': 'Scan code',
        'HISTORYBUTTONMENU': 'History',
        'SEARCHBUTTONMENU': 'Search',
        'DEVICELISTBUTTONMENU': 'Registered devices',
        'SETTINGSBUTTONMENU': 'Settings',
        'SURGERYDATA': 'Practice details',
        'SURGERY': 'Practice',
        'CONTACTPERSON': 'Contact',
        'STREETNO': 'Street, No.',
        'ZIPCITY': 'Postcode, City',
        'COUNTRY': 'Country',
        'PHONE': 'Phone',
        'MAIL': 'Email',
        'DENTALDEPOT': 'Dental Dealer',
        'LOCATION': 'Country',
        'DEVICEDATA': 'Device details',
        'MODELNO': 'Article number (REF)',
        'MODEL': 'Product name',
        'SERIALNO': 'Serial number (SN)',
        'INSTALLDATA': 'Installation details',
        'INSTALLDATE': 'Installation date',
        'NAMEOFEMPLOYEE': 'Name of technician',
        'DATEOFPRODUCTTRAINING': 'Product training date',
        'VALIDATE': 'Confirm',
        'VALIDATION': 'Confirmation',
        'VALIDATIONTEXT': 'I hereby confirm the general terms and conditions of DÜRR DENTAL AG',
        'NOTREGISTERED': 'Not yet registered',
        'QUESTION': 'Subject',
        'MORE': 'Further details',
        'PICTURES': 'Images (tipp to add image)',
        'APPCONTENT': 'Configuration',
        'LANGUAGERESTART': 'Language',
        'DOCTYPES': 'Document type',
        'NOTHINGFOUND': 'No search results',
        'CLOSEAPPMENU': 'Close the App',
        'PULLTOREFRESH': 'Pull to refresh',
        'CLEARHISTORY': 'Delete history',
        'AGB': 'Accept GTC',
        'PASSWORD': 'Password',
        'MAILAD': 'Email',
        'FORGOT': 'Contact service',
        'NEWINSTALL': 'New installation',
        'CHECKCONNECTION': 'Please check your internet connection',
        'IAGREE': 'I hereby confirm that I have the express consent of the owner and/or authorised operator',
        'REGISTERLONG': 'Product registration via Email',
        'QUESTIONS': 'Questions about App',
        'ABORT': 'Cancel',
        'READ': 'read',
        'CONFIG': 'App details',
        'VERSION': 'Dürr Dental Service V1.0 - 2015',
        'SHORTMAN': 'View help',
        'DATAAGREE': 'Data Privacy Statement',
        'LOGGEDIN': 'Login details',
        'USER': 'User',
        'COMPANY': 'Company',
        'LOGOUT': 'Logout user',
        'INTROWELCOME': 'Welcome',
        'INTROCONCEPT': 'On the following pages the Dürr Service App will be explained',
        'INTROCONCEPT2': 'The basic functions of the software can be used without registration. The use of all other functions requires registration, which can be carried out using the software. If you are the employee of an authorised dealer of DÜRR DENTAL AG, you will be provided with user details.',
        'INTROBACK': 'Back',
        'INTRONEXT': 'Next',
        'INTROSKIP': 'Skip',
        'INTROSTART': "Let's start!",
        'DONTSHOWAGAIN': 'Hide help',
        'USERNAMEERROR': 'Unknown Email address. Please check your login.',
        'PWDERREROR': 'Wrong password. Please check your login.',
        'OTHERERROR': 'Wrong login. Please check Email and password.',
        'SCANNEDARTNR': 'The scanned code probably contains only the article number (REF). Do you want to add a serial number scan(SN)',
        'NOINTERNET': 'No internet connection. Login not possible.',
        'SERVICESENT': 'Thank you for your message.',
        'SERVICEABORT': 'Contact interrupted. Please try again.',
        'RESULTS': 'Results',
        'MENU': 'Menu',
        'REGSENT': 'Thank you for your registration.',
        'YES': 'Yes',
        'NO': 'No',
        'SEARCH': 'search',
        'HOME': 'Home',
        'DOWNLOADS': 'Downloads'
    });

    $translateProvider.translations('de', {
        'ENTERLOGINDATA': 'Geben Sie hier Ihre DuerrDental.NET Anmeldedaten ein:',
        'ENTERLOGINDATAMESSAGE': 'Bitte Anmeldedaten vollständig eingeben',
        'FORGOTDATABUTTON': 'Passwort?',
        'REGISTERBUTTON': 'Registrieren?',
        'SERVICEBUTTON': 'Service anfragen',
        'LOGINBUTTON': 'Login',
        'DEMOBUTTON': 'Gastzugang',
        'REMEMBERLOGINDATABUTTON': 'Anmeldedaten merken',
        'LASTSEARCHESHEADER': 'Letzte Suchbegriffe',
        'SEARCHBUTTONSTART': 'Suche',
        'SCANBUTTONSTART': 'Code scannen',
        'SCANBUTTONMENU': 'Code scannen',
        'HISTORYBUTTONMENU': 'Verlauf',
        'SEARCHBUTTONMENU': 'Suche',
        'DEVICELISTBUTTONMENU': 'Registrierte Geräte',
        'SETTINGSBUTTONMENU': 'Einstellungen',
        'SURGERYDATA': 'Praxisdaten',
        'SURGERY': 'Praxis',
        'CONTACTPERSON': 'Kontaktperson',
        'STREETNO': 'Straße, Nr.',
        'ZIPCITY': 'PLZ, Ort',
        'COUNTRY': 'Land',
        'PHONE': 'Telefon',
        'MAIL': 'E-Mail',
        'DENTALDEPOT': 'Dental Depot',
        'LOCATION': 'Land',
        'DEVICEDATA': 'Gerätedaten',
        'MODELNO': 'Artikelnummer (REF)',
        'MODEL': 'Produktname',
        'SERIALNO': 'Seriennummer (SN)',
        'INSTALLDATA': 'Installationsdaten',
        'INSTALLDATE': 'Installationsdatum',
        'NAMEOFEMPLOYEE': 'Name des MPG-Beraters',
        'DATEOFPRODUCTTRAINING': 'Produkteinweisung',
        'VALIDATE': 'Bestätigen',
        'VALIDATION': 'Bestätigung',
        'VALIDATIONTEXT': 'Hiermit bestätige ich die AGB der DÜRR DENTAL AG.',
        'NOTREGISTERED': 'Noch nicht registriert',
        'QUESTION': 'Betreff',
        'MORE': 'Weiteres',
        'PICTURES': 'Bilder (Hinzufügen durch Antippen)',
        'APPCONTENT': 'Inhalt',
        'LANGUAGERESTART': 'Sprache',
        'DOCTYPES': 'Dokumententypen',
        'NOTHINGFOUND': 'Keine Suchergebnisse',
        'CLOSEAPPMENU': 'App beenden',
        'PULLTOREFRESH': 'Ziehen zum Aktualisieren',
        'CLEARHISTORY': 'Verlauf leeren',
        'AGB': 'AGB akzeptieren',
        'PASSWORD': 'Passwort',
        'MAILAD': 'E-Mail',
        'FORGOT': 'Service anfragen',
        'NEWINSTALL': 'Neuinstallation',
        'CHECKCONNECTION': 'Bitte überprüfen Sie Ihre Internetverbindung',
        'IAGREE': 'Hiermit bestätige ich das ausdrückliche Einverständnis des Eigentümers und/oder Nutzungsberechtigten',
        'REGISTERLONG': 'Produkt per E-Mail registrieren',
        'QUESTIONS': 'Rückfragen zur App?',
        'ABORT': 'Abbrechen',
        'READ': 'lesen',
        'CONFIG': 'Konfiguration',
        'VERSION': 'Dürr Dental Service V1.1- 2015',
        'SHORTMAN': 'Kurzanleitung anschauen',
        'DATAAGREE': 'Datenschutzerklärung',
        'LOGGEDIN': 'Login-Informationen',
        'USER': 'Benutzer',
        'COMPANY': 'Firma',
        'LOGOUT': 'Benutzer abmelden',
        'INTROWELCOME': 'Willkommen',
        'INTROCONCEPT': 'Auf den folgenden Seiten wird Ihnen das Bedienkonzept der Dürr Service App vorgestellt. ',
        'INTROCONCEPT2': 'Die App kann in den Grundfunktionen ohne Registrierung genutzt werden. Für die Nutzung aller Funktionen ist eine Registrierung erforderlich. Diese kann über die App erfolgen. Die Benutzerdaten erhalten Sie, wenn Sie Mitarbeiter eines Vertragshändlers der Dürr Dental AG sind.',
        'INTROBACK': 'Zurück',
        'INTRONEXT': 'Weiter',
        'INTROSKIP': 'Überspringen',
        'INTROSTART': 'Los geht' + "'" + 's',
        'DONTSHOWAGAIN': 'Hilfe nicht mehr anzeigen',
        'USERNAMEERROR': 'Unbekannte E-Mail-Adresse! Bitte überprüfen Sie Ihre Logindaten.',
        'PWDERREROR': 'Falsches Passwort. Bitte überprüfen Sie Ihre Logindaten.',
        'OTHERERROR': 'Falsche Anmeldedaten. Bitte überprüfen Sie Ihre E-Mail-Adresse und Ihr Passwort.',
        'SCANNEDARTNR': 'Der gescannte Barcode beinhaltet nur die Artikelnummer (REF). Möchten Sie zusätzlich noch die Seriennummer (SN) scannen?',
        'NOINTERNET': 'Keine Internetverbindung. Login nicht möglich.',
        'SERVICESENT': 'Vielen Dank für Ihre Nachricht.',
        'SERVICEABORT': 'Anfrage abgebrochen. Bitte erneut versuchen.',
        'RESULTS': 'Suchergebnisse',
        'MENU': 'Menü',
        'REGSENT': 'Vielen Dank für Ihre Registrierung',
        'YES': 'Ja',
        'NO': 'Nein',
        'SEARCH': 'Suche',
        'HOME': 'Start',
        'DOWNLOADS': 'Downloads'
    });

    $translateProvider.translations('es', {
        'ENTERLOGINDATA': 'Indique los datos de acceso en DuerrDental.NET:',
        'ENTERLOGINDATAMESSAGE': 'Introduzca los datos de acceso completos',
        'FORGOTDATABUTTON': '¿Contraseña?',
        'REGISTERBUTTON': '¿Registrar?',
        'SERVICEBUTTON': 'Asistencia',
        'LOGINBUTTON': 'Inicio de sesión',
        'DEMOBUTTON': 'Acceso como invitado',
        'REMEMBERLOGINDATABUTTON': 'Recordar datos de acceso',
        'LASTSEARCHESHEADER': 'Últimos términos buscados',
        'SEARCHBUTTONSTART': 'Búsqueda',
        'SCANBUTTONSTART': 'Escanear código',
        'SCANBUTTONMENU': 'Escanear código',
        'HISTORYBUTTONMENU': 'Historial',
        'SEARCHBUTTONMENU': 'Búsqueda',
        'DEVICELISTBUTTONMENU': 'Equipos registrados',
        'SETTINGSBUTTONMENU': 'Ajustes',
        'SURGERYDATA': 'Datos de la consulta',
        'SURGERY': 'Consulta',
        'CONTACTPERSON': 'Persona de contacto',
        'STREETNO': 'Calle, n.º',
        'ZIPCITY': 'C. P., localidad',
        'COUNTRY': 'País',
        'PHONE': 'Teléfono',
        'MAIL': 'Correo electrónico',
        'DENTALDEPOT': 'Almacén dental',
        'LOCATION': 'País',
        'DEVICEDATA': 'Datos del equipo',
        'MODELNO': 'Referencia (REF)',
        'MODEL': 'Nombre de producto',
        'SERIALNO': 'Número de serie (SN)',
        'INSTALLDATA': 'Datos de instalación',
        'INSTALLDATE': 'Fecha de instalación',
        'NAMEOFEMPLOYEE': 'Nombre del asesor de productos sanitarios',
        'DATEOFPRODUCTTRAINING': 'Formación sobre el producto',
        'VALIDATE': 'Confirmar',
        'VALIDATION': 'Confirmación',
        'VALIDATIONTEXT': 'Por la presente confirmo las condiciones generales de DÜRR DENTAL AG.',
        'NOTREGISTERED': 'Todavía sin registrar',
        'QUESTION': 'Asunto',
        'MORE': 'Más',
        'PICTURES': 'Imágenes (pulsar sobre ellas para seleccionarlas)',
        'APPCONTENT': 'Contenido',
        'LANGUAGERESTART': 'Idioma',
        'DOCTYPES': 'Tipos de documentos',
        'NOTHINGFOUND': 'Sin resultados de búsqueda',
        'CLOSEAPPMENU': 'Cerrar aplicación',
        'PULLTOREFRESH': 'Arrastrar para actualizar',
        'CLEARHISTORY': 'Vaciar historial',
        'AGB': 'Aceptar las condiciones generales',
        'PASSWORD': 'Contraseña',
        'MAILAD': 'Correo electrónico',
        'FORGOT': 'Solicitar asistencia',
        'NEWINSTALL': 'Reinstalación',
        'CHECKCONNECTION': 'Compruebe su conexión a Internet',
        'IAGREE': 'Por la presente doy el consentimiento expreso del propietario o usufructuario',
        'REGISTERLONG': 'Registrar producto por correo electrónico',
        'QUESTIONS': '¿Preguntas sobre la aplicación?',
        'ABORT': 'Cancelar',
        'READ': 'leer',
        'CONFIG': 'Configuración',
        'VERSION': 'Dürr Dental Service V1.1- 2015',
        'SHORTMAN': 'Ver la guía rápida',
        'DATAAGREE': 'Info protección de datos',
        'LOGGEDIN': 'Información de inicio de sesión',
        'USER': 'Usuario',
        'COMPANY': 'Empresa',
        'LOGOUT': 'Cerrar sesión de usuario',
        'INTROWELCOME': 'Bienvenido/a',
        'INTROCONCEPT': 'En las siguientes páginas se explica el manejo de la Dürr Service App. ',
        'INTROCONCEPT2': 'Las funciones básicas de la aplicación se pueden utilizar sin registro previo. Para utilizar la totalidad de las funciones es necesario registrarse. El registro se puede realizar a través de la aplicación. Recibirá los datos de usuario si es usted empleado de un distribuidor oficial de Dürr Dental AG.',
        'INTROBACK': 'Atrás',
        'INTRONEXT': 'Siguiente',
        'INTROSKIP': 'Omitir',
        'INTROSTART': 'Empezar',
        'DONTSHOWAGAIN': 'No volver a mostrar la ayuda',
        'USERNAMEERROR': 'Correo electrónico desconocido. Compruebe los datos de inicio de sesión.',
        'PWDERREROR': 'Contraseña incorrecta. Compruebe los datos de inicio de sesión.',
        'OTHERERROR': 'Datos de acceso incorrectos. Compruebe la dirección de correo electrónico y la contraseña.',
        'SCANNEDARTNR': 'El código de barras escaneado contiene solo la referencia (REF). ¿Desea escanear también el número de serie (SN)?',
        'NOINTERNET': 'No hay conexión a Internet. No es posible iniciar sesión.',
        'SERVICESENT': 'Gracias por su mensaje.',
        'SERVICEABORT': 'Solicitud cancelada. Inténtelo de nuevo.',
        'RESULTS': 'Resultados de búsqueda',
        'MENU': 'Menú',
        'REGSENT': 'Gracias por registrarse',
        'YES': 'Sí',
        'NO': 'No',
        'SEARCH': 'Búsqueda',
        'HOME': 'Inicio',
        'DOWNLOADS': 'Descargas'


    });

    $translateProvider.translations('fr', {
        'ENTERLOGINDATA': 'Veuillez saisir vos données de connexion DuerrDental.NET ici :',
        'ENTERLOGINDATAMESSAGE': 'Veuillez saisir vos données de connexion complètes',
        'FORGOTDATABUTTON': 'Mot de passe ?',
        'REGISTERBUTTON': 'Enregistrer ?',
        'SERVICEBUTTON': 'Deman. serv',
        'LOGINBUTTON': 'Login',
        'DEMOBUTTON': 'Accès invité',
        'REMEMBERLOGINDATABUTTON': 'Mémoriser les données de connexion',
        'LASTSEARCHESHEADER': 'Derniers termes recherchés',
        'SEARCHBUTTONSTART': 'Recherche',
        'SCANBUTTONSTART': 'Scanner le code',
        'SCANBUTTONMENU': 'Scanner le code',
        'HISTORYBUTTONMENU': 'Historique',
        'SEARCHBUTTONMENU': 'Recherche',
        'DEVICELISTBUTTONMENU': 'Appareils enregistrés',
        'SETTINGSBUTTONMENU': 'Réglages',
        'SURGERYDATA': 'Données du cabinet',
        'SURGERY': 'Cabinet',
        'CONTACTPERSON': 'Interlocuteur',
        'STREETNO': 'N°, rue',
        'ZIPCITY': 'Code postal, ville',
        'COUNTRY': 'Pays',
        'PHONE': 'Téléphone',
        'MAIL': 'E-mail',
        'DENTALDEPOT': 'Dental Depot',
        'LOCATION': 'Pays',
        'DEVICEDATA': 'Données sur l' + "'" + 'appareil',
        'MODELNO': 'Référence (REF)',
        'MODEL': 'Nom du produit',
        'SERIALNO': 'Numéro de série (SN)',
        'INSTALLDATA': 'Données d' + "'" + 'installation',
        'INSTALLDATE': 'Date d' + "'" + 'installation',
        'NAMEOFEMPLOYEE': 'Conseiller prod. médicaux',
        'DATEOFPRODUCTTRAINING': 'Instructions concernant le produit',
        'VALIDATE': 'Confirmer',
        'VALIDATION': 'Confirmation',
        'VALIDATIONTEXT': 'Par la présente, je confirme les conditions générales de vente de la société DÜRR DENTAL AG.',
        'NOTREGISTERED': 'Pas encore enregistré',
        'QUESTION': 'Sujet',
        'MORE': 'Divers',
        'PICTURES': 'Images (effleurer pour ajouter)',
        'APPCONTENT': 'Contenu',
        'LANGUAGERESTART': 'Langue',
        'DOCTYPES': 'Types de document',
        'NOTHINGFOUND': 'Aucun résultat pour la recherche',
        'CLOSEAPPMENU': 'Quitter l' + "'" + 'application',
        'PULLTOREFRESH': 'Tirer pour actualiser',
        'CLEARHISTORY': 'Effacer l' + "'" + 'historique',
        'AGB': 'Accepter les conditions générales de vente',
        'PASSWORD': 'Mot de passe',
        'MAILAD': 'E-mail',
        'FORGOT': 'Deman. serv',
        'NEWINSTALL': 'Nouvelle installation',
        'CHECKCONNECTION': 'Veuillez vérifier votre connexion Internet',
        'IAGREE': 'Par la présente, je confirme que le propriétaire et/ou le bénéficiaire effectif ont donné leur accord explicite',
        'REGISTERLONG': 'Enregistrer le produit par e-mail',
        'QUESTIONS': 'Questions sur l' + "'" + 'appli ?',
        'ABORT': 'Annuler',
        'READ': 'lire',
        'CONFIG': 'Configuration',
        'VERSION': 'Dürr Dental Service V1.1- 2015',
        'SHORTMAN': 'Consulter la notice abrégée',
        'DATAAGREE': 'Déclaration de confidentialité',
        'LOGGEDIN': 'Informations de connexion',
        'USER': 'Utilisateur',
        'COMPANY': 'Société',
        'LOGOUT': 'Déconnecter l' + "'" + 'utilisateur',
        'INTROWELCOME': 'Bienvenue',
        'INTROCONCEPT': 'Les pages suivantes sont consacrées à la présentation du concept de commande de l' + "'" + 'application Dürr Service App. ',
        'INTROCONCEPT2': 'L' + "'" + 'utilisation des fonctions de base de l' + "'" + 'application ne requiert pas d' + "'" + 'enregistrement. Pour utiliser toutes les fonctions, l' + "'" + 'enregistrement est obligatoire. Pour ce faire, il est possible d' + "'" + 'utiliser l' + "'" + 'application. Les données utilisateur vous sont fournies si vous êtes employé d' + "'" + 'un distributeur agréé de Dürr Dental AG.',
        'INTROBACK': 'Retour',
        'INTRONEXT': 'Suivant',
        'INTROSKIP': 'Ignorer',
        'INTROSTART': 'C' + "'" + 'est parti',
        'DONTSHOWAGAIN': 'Ne plus afficher l' + "'" + 'aide',
        'USERNAMEERROR': 'Adresse e-mail inconnue ! Veuillez vérifier vos données de connexion.',
        'PWDERREROR': 'Mot de passe incorrect. Veuillez vérifier vos données de connexion.',
        'OTHERERROR': 'Données de connexion incorrectes. Veuillez vérifier votre adresse e-mail et votre mot de passe.',
        'SCANNEDARTNR': 'Le code-barres scanné contient seulement la référence (REF). Voulez-vous également scanner le numéro de série (SN) ?',
        'NOINTERNET': 'Pas de connexion Internet. Connexion impossible.',
        'SERVICESENT': 'Merci pour votre message.',
        'SERVICEABORT': 'Demande annulée. Veuillez ré-essayer.',
        'RESULTS': 'Résultats de la recherche',
        'MENU': 'Menu',
        'REGSENT': 'Nous vous remercions de vous être enregistré',
        'YES': 'Oui',
        'NO': 'Non',
        'SEARCH': 'Recherche',
        'HOME': 'Page Accueil',
        'DOWNLOADS': 'Téléchargements'


    });

    $translateProvider.translations('it', {
        'ENTERLOGINDATA': 'Inserisci qui le tue credenziali per accedere al sito DuerrDental.NET:',
        'ENTERLOGINDATAMESSAGE': 'Inserisci le tue credenziali complete',
        'FORGOTDATABUTTON': 'Password mancante?',
        'REGISTERBUTTON': 'Non iscritto?',
        'SERVICEBUTTON': 'Contatta il servizio assistenza',
        'LOGINBUTTON': 'Login',
        'DEMOBUTTON': 'Accedi come ospite',
        'REMEMBERLOGINDATABUTTON': 'Ricorda i miei dati',
        'LASTSEARCHESHEADER': 'Ultimo termine ricercato',
        'SEARCHBUTTONSTART': 'Ricerca',
        'SCANBUTTONSTART': 'Scansiona codice',
        'SCANBUTTONMENU': 'Scansiona codice',
        'HISTORYBUTTONMENU': 'Cronologia',
        'SEARCHBUTTONMENU': 'Ricerca',
        'DEVICELISTBUTTONMENU': 'Apparecchi registrati',
        'SETTINGSBUTTONMENU': 'Impostazioni',
        'SURGERYDATA': 'Dati dello studio',
        'SURGERY': 'Studio',
        'CONTACTPERSON': 'Persona di contatto',
        'STREETNO': 'Via, numero civico',
        'ZIPCITY': 'Codice postale, località',
        'COUNTRY': 'Paese',
        'PHONE': 'Telefono',
        'MAIL': 'e-mail',
        'DENTALDEPOT': 'Dental Depot',
        'LOCATION': 'Paese',
        'DEVICEDATA': 'Dati apparecchi',
        'MODELNO': 'Codice articolo (REF)',
        'MODEL': 'Nome prodotto',
        'SERIALNO': 'Matricola (SN)',
        'INSTALLDATA': 'Dati installazione',
        'INSTALLDATE': 'Data installazione',
        'NAMEOFEMPLOYEE': 'Nome del consulente MPG',
        'DATEOFPRODUCTTRAINING': 'Descrizione prodotto',
        'VALIDATE': 'Invia conferma',
        'VALIDATION': 'Conferma',
        'VALIDATIONTEXT': 'Accetto le condizioni generali di contratto di DÜRR DENTAL AG.',
        'NOTREGISTERED': 'Utente non ancora registrato',
        'QUESTION': 'Oggetto',
        'MORE': 'Altro',
        'PICTURES': 'Immagini (clicca per inserire)',
        'APPCONTENT': 'Indice',
        'LANGUAGERESTART': 'Lingua',
        'DOCTYPES': 'Tipo di documenti',
        'NOTHINGFOUND': 'Nessun risultato trovato',
        'CLOSEAPPMENU': 'Termina app',
        'PULLTOREFRESH': 'Trascina per aggiornare',
        'CLEARHISTORY': 'Elimina cronologia esplorazioni',
        'AGB': 'Accetta condizioni generali di contratto',
        'PASSWORD': 'Password',
        'MAILAD': 'e-mail',
        'FORGOT': 'Contatta il servizio assistenza',
        'NEWINSTALL': 'Nuova installazione',
        'CHECKCONNECTION': 'Verifica connessione Internet',
        'IAGREE': 'Confermo espressamente le condizioni definite dal proprietario e/o dal titolare dei diritti di sfruttamento del sito',
        'REGISTERLONG': 'Registra il prodotto via e-mail',
        'QUESTIONS': 'Dubbi o domande sull' + "'" + 'app?',
        'ABORT': 'Annulla',
        'READ': 'leggi',
        'CONFIG': 'Configurazione',
        'VERSION': 'Dürr Dental Service V1.1- 2015',
        'SHORTMAN': 'Consulta le istruzioni brevi',
        'DATAAGREE': 'Dichiarazione sulla protezione dei dati',
        'LOGGEDIN': 'Informazioni sull' + "'" + 'accesso',
        'USER': 'Utente',
        'COMPANY': 'Azienda',
        'LOGOUT': 'Disconnessione utente',
        'INTROWELCOME': 'Benvenuto',
        'INTROCONCEPT': 'Nelle pagine seguenti ti spiegheremo il concetto di servizio dell' + "'" + 'app del Servizio di Assistenza Dürr. ',
        'INTROCONCEPT2': 'Non occorre registrarsi per poter utilizzare le funzioni base dell' + "'" + 'app. Per l' + "'" + 'accesso a tutte le funzioni, è richiesta la registrazione. È possibile registrarsi tramite l' + "'" + 'app. Se sei un dipendente di uno dei distributori autorizzati Dürr Dental AG, riceverai in modo automatico le credenziali utente.',
        'INTROBACK': 'Indietro',
        'INTRONEXT': 'Avanti',
        'INTROSKIP': 'Salta',
        'INTROSTART': 'Inizia',
        'DONTSHOWAGAIN': 'Non visualizzare più la finestra di aiuto',
        'USERNAMEERROR': 'Indirizzo e-mail sconosciuto. Verifica i tuoi dati di accesso.',
        'PWDERREROR': 'Password non valida. Verifica i tuoi dati di accesso.',
        'OTHERERROR': 'Credenziali non valide. Verifica l' + "'" + 'indirizzo e-mail e la password.',
        'SCANNEDARTNR': 'Il codice a barre scansionato riporta solo il codice articolo (REF). Desideri scansionare anche la matricola (REF)?',
        'NOINTERNET': 'Nessuna connessione disponibile. Non è possibile effettuare il login.',
        'SERVICESENT': 'Grazie per averci contattato.',
        'SERVICEABORT': 'Annulla richiesta. Riprova.',
        'RESULTS': 'Risultati di ricerca',
        'MENU': 'Menu',
        'REGSENT': 'Grazie per esserti registrato',
        'YES': 'Sì',
        'NO': 'No',
        'SEARCH': 'Ricerca',
        'HOME': 'Iniziale',
        'DOWNLOADS': 'Downloads'


    });

    $translateProvider.translations('pl', {
        'ENTERLOGINDATA': 'Proszę wprowadzić swoje dane do logowania do DuerrDental.NET:',
        'ENTERLOGINDATAMESSAGE': 'Proszę wprowadzić wszystkie dane',
        'FORGOTDATABUTTON': 'Hasło?',
        'REGISTERBUTTON': 'Rejestracja?',
        'SERVICEBUTTON': 'Pytanie do serwisu',
        'LOGINBUTTON': 'Login',
        'DEMOBUTTON': 'Dostęp jako gość',
        'REMEMBERLOGINDATABUTTON': 'Zapamiętanie danych logowania',
        'LASTSEARCHESHEADER': 'Ostatnie wyszukiwanie',
        'SEARCHBUTTONSTART': 'Szukaj',
        'SCANBUTTONSTART': 'Skanuj kod',
        'SCANBUTTONMENU': 'Skanuj kod',
        'HISTORYBUTTONMENU': 'W toku',
        'SEARCHBUTTONMENU': 'Szukaj',
        'DEVICELISTBUTTONMENU': 'Zarejestrowane urządzenia',
        'SETTINGSBUTTONMENU': 'Ustawienia',
        'SURGERYDATA': 'Dane gabinetu',
        'SURGERY': 'Gabinet',
        'CONTACTPERSON': 'Osoba kontaktowa',
        'STREETNO': 'Ulica, nr',
        'ZIPCITY': 'Kod, miasto',
        'COUNTRY': 'Woj.',
        'PHONE': 'Telefon',
        'MAIL': 'E-mail',
        'DENTALDEPOT': 'Sklep stom.',
        'LOCATION': 'Woj.',
        'DEVICEDATA': 'Dane urządzenia',
        'MODELNO': 'Numer produktu (REF)',
        'MODEL': 'Nazwa',
        'SERIALNO': 'Numer seryjny (SN)',
        'INSTALLDATA': 'Dane instalacji',
        'INSTALLDATE': 'Data instalacji',
        'NAMEOFEMPLOYEE': 'Nazwisko doradcy d/s. RTG',
        'DATEOFPRODUCTTRAINING': 'Skrócony opis produktu',
        'VALIDATE': 'Zatwierdź',
        'VALIDATION': 'Zatwierdzenie',
        'VALIDATIONTEXT': 'Niniejszym potwierdzam ogólne warunki handlowe firmy DÜRR DENTAL AG.',
        'NOTREGISTERED': 'Jeszcze nie zarejestrowano',
        'QUESTION': 'Dotyczy',
        'MORE': 'Dalej',
        'PICTURES': 'Zdjęcia (Dodaj przez zaznaczenie)',
        'APPCONTENT': 'Zawartość',
        'LANGUAGERESTART': 'Język',
        'DOCTYPES': 'Typ dokumentu',
        'NOTHINGFOUND': 'Brak wyników',
        'CLOSEAPPMENU': 'Zakończ aplikację',
        'PULLTOREFRESH': 'Przeciągnij aby zaktualizować',
        'CLEARHISTORY': 'Zeruj przebieg',
        'AGB': 'Zaakceptuj warunki',
        'PASSWORD': 'Hasło',
        'MAILAD': 'E-mail',
        'FORGOT': 'Pytanie do serwisu',
        'NEWINSTALL': 'Nowa instalacja',
        'CHECKCONNECTION': 'Proszę sprawdzić swoje połączenie internetowe',
        'IAGREE': 'Niniejszym potwierdzam wyraźną zgodę właściciela i/lub osoby uprawnionej do użytkowania',
        'REGISTERLONG': 'Rejestracja produktu przez e-mail',
        'QUESTIONS': 'Pytania dotyczące aplikacji?',
        'ABORT': 'Przerwij',
        'READ': 'czytaj',
        'CONFIG': 'Konfiguracja',
        'VERSION': 'Dürr Dental Service V1.1- 2015',
        'SHORTMAN': 'Podgląd skróconej instrukcji',
        'DATAAGREE': 'Deklaracja ochrony danych osob.',
        'LOGGEDIN': 'Informacje logowania',
        'USER': 'Użytkownik',
        'COMPANY': 'Firma',
        'LOGOUT': 'Wyloguj użytkownika',
        'INTROWELCOME': 'Witamy',
        'INTROCONCEPT': 'Na następnych stronach przedstawiony jest sposób obsługi aplikacji Dürr Service. ',
        'INTROCONCEPT2': 'Z podstawowych funkcji aplikacji można korzystać bez rejestracji. Aby móc skorzystać ze wszystkich funkcji wymagana jest rejestracja. Można jej dokonać za pomocą aplikacji. Dane użytkownika otrzymasz będąc pracownikiem autoryzowanego dystrybutora firmy Dürr Dental AG.',
        'INTROBACK': 'Wstecz',
        'INTRONEXT': 'Dalej',
        'INTROSKIP': 'Pomiń',
        'INTROSTART': 'Start',
        'DONTSHOWAGAIN': 'Nie pokazuj więcej Pomocy',
        'USERNAMEERROR': 'Nieznany adres e-mail! Proszę sprawdzić swoje dane logowania.',
        'PWDERREROR': 'Nieprawidłowe hasło. Proszę sprawdzić swoje dane logowania.',
        'OTHERERROR': 'Nieprawidłowe dane logowania. Proszę sprawdzić swój adres e-mail i hasło.',
        'SCANNEDARTNR': 'Zeskanowany kod kreskowy zawiera tylko numer produktu (REF). Czy chcesz dodatkowo zeskanować numer seryjny (REF)?',
        'NOINTERNET': 'Brak połączenia internetowego. Zalogowanie niemożliwe.',
        'SERVICESENT': 'Dziękujemy za wiadomość.',
        'SERVICEABORT': 'Wyszukiwanie przerwane. Proszę spróbować ponownie.',
        'RESULTS': 'Wyniki wyszukiwania',
        'MENU': 'Menu',
        'REGSENT': 'Dziękujemy za rejestrację',
        'YES': 'Tak',
        'NO': 'Nie',
        'SEARCH': 'Szukaj',
        'HOME': 'Startowa',
        'DOWNLOADS': 'Downloads'


    });

    $translateProvider.translations('pt', {
        'ENTERLOGINDATA': 'Insira aqui seus dados de acesso da DuerrDental.NET:',
        'ENTERLOGINDATAMESSAGE': 'Insira os dados de acesso completos',
        'FORGOTDATABUTTON': 'Senha?',
        'REGISTERBUTTON': 'Registrar?',
        'SERVICEBUTTON': 'Solicitar manutenção',
        'LOGINBUTTON': 'Login',
        'DEMOBUTTON': 'Acesso de visitante',
        'REMEMBERLOGINDATABUTTON': 'Lembrar dados de acesso',
        'LASTSEARCHESHEADER': 'Último termo pesquisado',
        'SEARCHBUTTONSTART': 'Busca',
        'SCANBUTTONSTART': 'Escanear código',
        'SCANBUTTONMENU': 'Escanear código',
        'HISTORYBUTTONMENU': 'Desenvolvimento',
        'SEARCHBUTTONMENU': 'Busca',
        'DEVICELISTBUTTONMENU': 'Aparelhos registrados',
        'SETTINGSBUTTONMENU': 'Configurações',
        'SURGERYDATA': 'Dados do consultório',
        'SURGERY': 'Consultório',
        'CONTACTPERSON': 'Contato',
        'STREETNO': 'Rua, nº',
        'ZIPCITY': 'CEP, cidade',
        'COUNTRY': 'País',
        'PHONE': 'Telefone',
        'MAIL': 'E-mail',
        'DENTALDEPOT': 'Depósito dentário',
        'LOCATION': 'País',
        'DEVICEDATA': 'Dados do aparelho',
        'MODELNO': 'Número de pedido (REF)',
        'MODEL': 'Nome do produto',
        'SERIALNO': 'Número de série (SN)',
        'INSTALLDATA': 'Dados da instalação',
        'INSTALLDATE': 'Data da instalação',
        'NAMEOFEMPLOYEE': 'Nome do consultor MPG',
        'DATEOFPRODUCTTRAINING': 'Introdução do produto',
        'VALIDATE': 'Confirmar',
        'VALIDATION': 'Confirmação',
        'VALIDATIONTEXT': 'Confirmo o AGB da DÜRR DENTAL AG.',
        'NOTREGISTERED': 'Ainda não registrado',
        'QUESTION': 'Assunto',
        'MORE': 'Outros',
        'PICTURES': 'Imagens (inserir tocando)',
        'APPCONTENT': 'Conteúdo',
        'LANGUAGERESTART': 'Idioma',
        'DOCTYPES': 'Tipos de documentos',
        'NOTHINGFOUND': 'Nenhum resultado encontrado',
        'CLOSEAPPMENU': 'Finalizar o app',
        'PULLTOREFRESH': 'Ir para a atualização',
        'CLEARHISTORY': 'Esvaziar o desenvolvimento',
        'AGB': 'Aceitar AGB',
        'PASSWORD': 'Senha',
        'MAILAD': 'E-mail',
        'FORGOT': 'Solicitar manutenção',
        'NEWINSTALL': 'Nova instalação',
        'CHECKCONNECTION': 'Verifique sua conexão com a internet',
        'IAGREE': 'Confirmo o consentimento do proprietário e/ou dos direitos de uso',
        'REGISTERLONG': 'Registrar produto por e-mail',
        'QUESTIONS': 'Dúvidas sobre o app?',
        'ABORT': 'Cancelar',
        'READ': 'Ler',
        'CONFIG': 'Configuração',
        'VERSION': 'Dürr Dental Service V1.1- 2015',
        'SHORTMAN': 'Abrir instruções rápidas',
        'DATAAGREE': 'Política de privacidade',
        'LOGGEDIN': 'Informações de login',
        'USER': 'Usuário',
        'COMPANY': 'Empresa',
        'LOGOUT': 'Desconectar usuário',
        'INTROWELCOME': 'Bem-vindo(a)',
        'INTROCONCEPT': 'Nas páginas a seguir será apresentado o conceito de controle do Dürr Service App. ',
        'INTROCONCEPT2': 'As funções básicas do app podem ser utilizadas sem registro. Para usar todas as funções é necessário fazer um registro,que pode ser realizado pelo app. Você receberá os dados de usuário se for funcionário de um revendedor da Dürr Dental AG.',
        'INTROBACK': 'Voltar',
        'INTRONEXT': 'Continuar',
        'INTROSKIP': 'Pular',
        'INTROSTART': 'Começar',
        'DONTSHOWAGAIN': 'Não exibir mais a ajuda',
        'USERNAMEERROR': 'Endereço de e-mail desconhecido! Verifique seus dados de login.',
        'PWDERREROR': 'Senha incorreta. Verifique seus dados de login.',
        'OTHERERROR': 'Dados de acesso incorretos. Verifique seu endereço de e-mail e senha.',
        'SCANNEDARTNR': 'O código de barras escaneado contém apenas o número de pedido (REF). Deseja escanear também o número de série (REF)?',
        'NOINTERNET': 'Nenhuma conexão com a internet. Não é possível fazer login.',
        'SERVICESENT': 'Agradecemos sua mensagem.',
        'SERVICEABORT': 'Solicitação cancelada. Tente novamente.',
        'RESULTS': 'Resultados da pesquisa',
        'MENU': 'Menu',
        'REGSENT': 'Agradecemos seu registro',
        'YES': 'Sim',
        'NO': 'Não',
        'SEARCH': 'Busca',
        'HOME': 'Arranque',
        'DOWNLOADS': 'Downloads'


    });

    $translateProvider.translations('da', {
        'ENTERLOGINDATA': 'Indtast dine DuerrDental.NET-logon-oplysninger her:',
        'ENTERLOGINDATAMESSAGE': 'Indtast alle dine logon-oplysninger',
        'FORGOTDATABUTTON': 'Adgangskode?',
        'REGISTERBUTTON': 'Registrering?',
        'SERVICEBUTTON': 'Spørg om service',
        'LOGINBUTTON': 'Logon',
        'DEMOBUTTON': 'Gæsteadgang',
        'REMEMBERLOGINDATABUTTON': 'Markér logon-oplysninger',
        'LASTSEARCHESHEADER': 'Seneste søgebegreber',
        'SEARCHBUTTONSTART': 'Søgning',
        'SCANBUTTONSTART': 'Scan kode',
        'SCANBUTTONMENU': 'Scan kode',
        'HISTORYBUTTONMENU': 'Forløb',
        'SEARCHBUTTONMENU': 'Søgning',
        'DEVICELISTBUTTONMENU': 'Registrerede apparater',
        'SETTINGSBUTTONMENU': 'Indstillinger',
        'SURGERYDATA': 'Klinikdata',
        'SURGERY': 'Klinik',
        'CONTACTPERSON': 'Kontaktperson',
        'STREETNO': 'Gade, nr.',
        'ZIPCITY': ' By',
        'COUNTRY': 'Land',
        'PHONE': 'Telefon',
        'MAIL': 'E-mail',
        'DENTALDEPOT': 'Dental Depot',
        'LOCATION': 'Land',
        'DEVICEDATA': 'Enhedsdata',
        'MODELNO': 'Bestillingsnummer (REF)',
        'MODEL': 'Produktnavn',
        'SERIALNO': 'Serienummer (SN)',
        'INSTALLDATA': 'Installationsdata',
        'INSTALLDATE': 'Installationsdato',
        'NAMEOFEMPLOYEE': 'Navn på MPG-rådgiver',
        'DATEOFPRODUCTTRAINING': 'Produktanvisning',
        'VALIDATE': 'Bekræft',
        'VALIDATION': 'Bekræftelse',
        'VALIDATIONTEXT': 'Jeg bekræfter hermed DÜRR DENTAL AGs almindelige forretningsbetingelser.',
        'NOTREGISTERED': 'Endnu ikke registreret',
        'QUESTION': 'Vedr.',
        'MORE': 'Andet',
        'PICTURES': 'Billeder (tilføjelse ved at markere)',
        'APPCONTENT': 'Indhold',
        'LANGUAGERESTART': 'Sprog',
        'DOCTYPES': 'Dokumenttyper',
        'NOTHINGFOUND': 'Ingen søgeresultater',
        'CLOSEAPPMENU': 'Afslut app',
        'PULLTOREFRESH': 'Træk for at opdatere',
        'CLEARHISTORY': 'Tøm forløb',
        'AGB': 'Accepter generelle forretningsbetingelser',
        'PASSWORD': 'Adgangskode',
        'MAILAD': 'E-mail',
        'FORGOT': 'Forespørg om service',
        'NEWINSTALL': 'Geninstallation',
        'CHECKCONNECTION': 'Kontrollér din internetforbindelse',
        'IAGREE': 'Jeg bekræfter hermed ejerens og/eller den anvendelsesberettigedes udtrykkelige accept',
        'REGISTERLONG': 'Registrering af produkt per e-mail',
        'QUESTIONS': 'Har du spørgsmål til appen?',
        'ABORT': 'Annuller',
        'READ': 'læs',
        'CONFIG': 'Konfiguration',
        'VERSION': 'Dürr Dental Service V1.1- 2015',
        'SHORTMAN': 'Vis kort vejledning',
        'DATAAGREE': 'Erklæring om databeskyttelse',
        'LOGGEDIN': 'Logon-oplysninger',
        'USER': 'Bruger',
        'COMPANY': 'Firma',
        'LOGOUT': 'Log bruger af',
        'INTROWELCOME': 'Velkommen',
        'INTROCONCEPT': 'På de følgende sider kan du læse, hvordan du benytter Dürr Service-appen. ',
        'INTROCONCEPT2': 'Appens basisfunktioner kan anvendes uden registrering.Registrering er påkrævet, før alle funktioner kan anvendes. Dette kan ske via appen. Du får brugeroplysningerne, hvis du er medarbejder hos en af Dürr Dental AGs autoriserede forhandlere.',
        'INTROBACK': 'Tilbage',
        'INTRONEXT': 'Videre',
        'INTROSKIP': 'Spring over',
        'INTROSTART': 'Så gør det løs',
        'DONTSHOWAGAIN': 'Vis ikke mere hjælp',
        'USERNAMEERROR': 'Ukendt e-mail-adresse! Kontrollér dine logon-oplysninger.',
        'PWDERREROR': 'Forkert adgangskode. Kontrollér dine logon-oplysninger.',
        'OTHERERROR': 'Forkerte logon-oplysninger. Kontrollér din e-mail-adresse og din adgangskode.',
        'SCANNEDARTNR': 'Den indscannede stregkode indeholder kun bestillingsnummeret (REF). Vil du også scanne serienummeret (REF)?',
        'NOINTERNET': 'Ingen internetforbindelse. Logon ikke mulig.',
        'SERVICESENT': 'Mange tak for din henvendelse.',
        'SERVICEABORT': 'Forespørgsel afbrudt. Prøv igen.',
        'RESULTS': 'Søgeresultater',
        'MENU': 'Menu',
        'REGSENT': 'Mange tak for din registrering.',
        'YES': 'Ja',
        'NO': 'Nej',
        'SEARCH': 'Søgning',
        'HOME': 'Home',
        'DOWNLOADS': 'Downloads'


    });

    $translateProvider.translations('ch', {
        'ENTERLOGINDATA': '请在此处输入您的 DuerrDental.NET 登录数据：',
        'ENTERLOGINDATAMESSAGE': '请完整地输入登录数据',
        'FORGOTDATABUTTON': '密码？',
        'REGISTERBUTTON': '注册？',
        'SERVICEBUTTON': '请求服务',
        'LOGINBUTTON': '登录',
        'DEMOBUTTON': '访客通道',
        'REMEMBERLOGINDATABUTTON': '记住登录数据',
        'LASTSEARCHESHEADER': '最近的搜索条目',
        'SEARCHBUTTONSTART': '搜索',
        'SCANBUTTONSTART': '扫描代码',
        'SCANBUTTONMENU': '扫描代码',
        'HISTORYBUTTONMENU': '进程',
        'SEARCHBUTTONMENU': '搜索',
        'DEVICELISTBUTTONMENU': '注册设备',
        'SETTINGSBUTTONMENU': '设置',
        'SURGERYDATA': '实际数据',
        'SURGERY': '实际',
        'CONTACTPERSON': '联络人',
        'STREETNO': '街道，编号',
        'ZIPCITY': '邮编，地点',
        'COUNTRY': '国家',
        'PHONE': '电话',
        'MAIL': '电子邮件',
        'DENTALDEPOT': 'Dental Depot',
        'LOCATION': '国家',
        'DEVICEDATA': '设备数据',
        'MODELNO': '物品编号 (REF)',
        'MODEL': '产品名',
        'SERIALNO': '序列号 (SN)',
        'INSTALLDATA': '安装数据',
        'INSTALLDATE': '安装日期',
        'NAMEOFEMPLOYEE': 'MPG 顾问名',
        'DATEOFPRODUCTTRAINING': '产品介绍',
        'VALIDATE': '确认',
        'VALIDATION': '确认',
        'VALIDATIONTEXT': '本人在此确认 DÜRR DENTAL AG 的一般商业条款。',
        'NOTREGISTERED': '尚未注册',
        'QUESTION': '事由',
        'MORE': '其他',
        'PICTURES': '图片 (点击添加)',
        'APPCONTENT': '目录',
        'LANGUAGERESTART': '语言',
        'DOCTYPES': '文档类型',
        'NOTHINGFOUND': '无查找结果',
        'CLOSEAPPMENU': '退出应用程序',
        'PULLTOREFRESH': '拉动刷新',
        'CLEARHISTORY': '清空进程',
        'AGB': '接受一般商业条款',
        'PASSWORD': '密码',
        'MAILAD': '电子邮件',
        'FORGOT': '请求服务',
        'NEWINSTALL': '重新安装',
        'CHECKCONNECTION': '请检查您的网络连接',
        'IAGREE': '本人在此确认明确同意所有者和/或授权使用者使用',
        'REGISTERLONG': '通过电子邮件注册产品',
        'QUESTIONS': '再次查询应用程序？',
        'ABORT': '取消',
        'READ': '读取',
        'CONFIG': '配置',
        'VERSION': 'Dürr Dental Service V1.1- 2015',
        'SHORTMAN': '查看简要说明',
        'DATAAGREE': '数据保护声明',
        'LOGGEDIN': '登录信息',
        'USER': '用户',
        'COMPANY': '公司',
        'LOGOUT': '注销用户',
        'INTROWELCOME': '欢迎',
        'INTROCONCEPT': '以下几页将为您介绍 Dürr 服务应用程序的操作理念。',
        'INTROCONCEPT2': '无需注册即可使用本应用程序的基本功能。要使用所有功能则需注册。可通过应用程序进行注册。如果您是 Dürr Dental AG 专销商的工作人员，你可获得用户数据。',
        'INTROBACK': '返回',
        'INTRONEXT': '下一步',
        'INTROSKIP': '跳过',
        'INTROSTART': '现在开始吧',
        'DONTSHOWAGAIN': '不再显示帮助',
        'USERNAMEERROR': '未知的电子邮件地址！请检查您的登录数据。',
        'PWDERREROR': '密码错误。请检查您的登录数据。',
        'OTHERERROR': '登录数据错误。请检查您的电子邮件地址和密码。',
        'SCANNEDARTNR': '已扫描的条形码只包含物品编号 (REF)。是否还要扫描序列号 (REF)？',
        'NOINTERNET': '无网络连接。无法登录。',
        'SERVICESENT': '非常感谢您的留言。',
        'SERVICEABORT': '已取消查询。请再试一次。',
        'RESULTS': '查找结果',
        'MENU': '菜单',
        'REGSENT': '非常感谢您的注册',
        'YES': '是',
        'NO': '否',
        'SEARCH': '搜索',
        'HOME': '开始页',
        'DOWNLOADS': '文件下载'

    });

    $translateProvider.translations('ru', {
        'ENTERLOGINDATA': 'Введите ваши регистрационные данные DuerrDental.NET:',
        'ENTERLOGINDATAMESSAGE': 'Введите пожалуйста, регистрационные данные полностью',
        'FORGOTDATABUTTON': 'Пароль',
        'REGISTERBUTTON': 'Регистрация',
        'SERVICEBUTTON': 'Сервисный запрос',
        'LOGINBUTTON': 'Вход в систему',
        'DEMOBUTTON': 'Доступ стороннего пользователя',
        'REMEMBERLOGINDATABUTTON': 'Сохранить регистрационные данные',
        'LASTSEARCHESHEADER': 'Последние поисковые запросы',
        'SEARCHBUTTONSTART': 'Поиск',
        'SCANBUTTONSTART': 'Сканировать код',
        'SCANBUTTONMENU': 'Сканировать код',
        'HISTORYBUTTONMENU': 'Порядок',
        'SEARCHBUTTONMENU': 'Поиск',
        'DEVICELISTBUTTONMENU': 'Зарегистрированные устройства',
        'SETTINGSBUTTONMENU': 'Настройки',
        'SURGERYDATA': 'Данные практики',
        'SURGERY': 'Практика',
        'CONTACTPERSON': 'Контактное лицо',
        'STREETNO': 'Улица, №.',
        'ZIPCITY': 'Почтовый индекс, населенный пункт',
        'COUNTRY': 'Страна',
        'PHONE': 'Телефон',
        'MAIL': 'E-Mail',
        'DENTALDEPOT': 'Dental Depot',
        'LOCATION': 'Страна',
        'DEVICEDATA': 'Данные устройства',
        'MODELNO': 'Номер заказа (REF)',
        'MODEL': 'Наименование продукта',
        'SERIALNO': 'Серийный номер (SN)',
        'INSTALLDATA': 'Данные инсталляции',
        'INSTALLDATE': 'Дата инсталляции',
        'NAMEOFEMPLOYEE': 'Имя консультанта MPG ',
        'DATEOFPRODUCTTRAINING': 'Инструктажа по продукту',
        'VALIDATE': 'Подтвердить',
        'VALIDATION': 'Подтверждение',
        'VALIDATIONTEXT': 'Настоящим я подтверждаю общие условия сделки DÜRR DENTAL AG.',
        'NOTREGISTERED': 'Еще не зарегистрировано',
        'QUESTION': 'Тема',
        'MORE': 'Дальнейшее',
        'PICTURES': 'Изображения (добавить путем ввода с клавиатуры)',
        'APPCONTENT': 'Содержание',
        'LANGUAGERESTART': 'Язык',
        'DOCTYPES': 'Типы документов',
        'NOTHINGFOUND': 'Отсутствие результата поиска',
        'CLOSEAPPMENU': 'Завершить приложение',
        'PULLTOREFRESH': 'Извлечь для обновления',
        'CLEARHISTORY': 'Очистить историю',
        'AGB': 'Принять общие условия сделки ',
        'PASSWORD': 'Пароль',
        'MAILAD': 'E-Mail',
        'FORGOT': 'Сервисный запрос',
        'NEWINSTALL': 'Повторная инсталляция',
        'CHECKCONNECTION': 'Пожалуйста, проверьте ваше соединение с интернетом',
        'IAGREE': 'Настоящим я подтверждаю выраженное согласие владельца и/или лица имеющего право использования',
        'REGISTERLONG': 'Регистрация продукта по E-Mail',
        'QUESTIONS': 'Дополнительные запросы по приложению?',
        'ABORT': 'Отмена',
        'READ': 'читать',
        'CONFIG': 'Конфигурация',
        'VERSION': 'Служба сервиса Dürr Dental V1.1- 2015',
        'SHORTMAN': 'Посмотреть краткое руководство',
        'DATAAGREE': 'Заявление о конфиденциальности ',
        'LOGGEDIN': 'Информация о входе в систему',
        'USER': 'Пользователь',
        'COMPANY': 'Фирма',
        'LOGOUT': 'Отмена регистрации пользователя',
        'INTROWELCOME': 'Добро пожаловать',
        'INTROCONCEPT': 'На следующих страницах представлена концепция управления приложением Dürr Service. ',
        'INTROCONCEPT2': 'Базовыми функциями приложения можно пользоваться без регистрации.Для пользования всеми функциями требуется регистрация. Ее можно пройти в приложении. Данные пользователя вы получаете, если являетесь сотрудником дистрибьютора, имеющего договор с Dürr Dental AG.',
        'INTROBACK': 'Назад',
        'INTRONEXT': 'Далее',
        'INTROSKIP': 'Пропустить',
        'INTROSTART': 'Начали',
        'DONTSHOWAGAIN': 'Не показывать больше помощь',
        'USERNAMEERROR': 'Неизвестный адрес E-Mail! Пожалуйста, проверьте ваши данные входа.',
        'PWDERREROR': 'Неверный пароль. Пожалуйста, проверьте ваши данные входа.',
        'OTHERERROR': 'Неверные регистрационные данные. Пожалуйста, проверьте ваш E-Mail и пароль.',
        'SCANNEDARTNR': 'Отсканированный штрих-код содержит только номер артикула (REF). Вы хотите дополнительно отсканировать серийный номер (REF)?',
        'NOINTERNET': 'Отсутствие соединения с интернетом. Вход в систему невозможен.',
        'SERVICESENT': 'Большое спасибо за ваше сообщение.',
        'SERVICEABORT': 'Отменить запрос. Пожалуйста, повторите попытку.',
        'RESULTS': 'Результат поиска',
        'MENU': 'Меню',
        'REGSENT': 'Большое спасибо за вашу регистрацию',
        'YES': 'Да',
        'NO': 'Нет',
        'SEARCH': 'Поиск',
        'HOME': 'главная страница',
        'DOWNLOADS': '3акачка'


    });

    //alert(window.localStorage['applang']);
    if (angular.isUndefined(window.localStorage['applang'])) {

        var userLang = navigator.language || navigator.userLanguage;

        var userlangshort = userLang.substr(0, userLang.indexOf('-'));
        if (userlangshort == 'de' || userlangshort == 'en' || userlangshort == 'da' || userlangshort == 'es' || userlangshort == 'fr' || userlangshort == 'it' || userlangshort == 'pl' || userlangshort == 'pt') {
            $translateProvider.preferredLanguage(userlangshort);
            console.log("Language found: " + userlangshort);
            window.localStorage['applang'] = userlangshort;
        } else {
            // Standardsprache Deutsch wenn keine passende Sprache gefunden
            $translateProvider.preferredLanguage('de');
            console.log("No language found");
            window.localStorage['applang'] = "de";

        }

    } else {

        $translateProvider.preferredLanguage(window.localStorage['applang']);
    }
   }])

// Set or get login values
.service('HistoryBackService', function () {
    console.log("SearchValueService setup done");
    return {

        // get or set userdata
        setScannedLoaded: function (scannedloaded) {
            window.localStorage['scannedloaded'] = scannedloaded;
            console.log("scannedloaded setted: " + scannedloaded);
        },
        setScannedScope: function (scannedscope) {
            window.localStorage['scannedscope'] = scannedscope;
            console.log("scannedscope setted: " + scannedscope);
        },
        getScannedLoaded: function () {
            console.log("scannedloaded got: " + window.localStorage['scannedloaded']);
            return window.localStorage['scannedloaded'] + "";
        },
        getScannedScope: function () {
            console.log("scannedscope got: " + window.localStorage['scannedscope']);
            return window.localStorage['scannedscope'] + "";
        }

    }
})

// Set or get search value (scanned or from input)
.service('SearchValueService', function () {
    console.log("SearchValueService setup done");
    return {
        
        isLongLang : function(langcode){
            var longLanguages = ['es', 'it', 'fr', 'da', 'ru', 'ch', 'zh'];
            return longLanguages.indexOf(langcode) != -1;
        },
        
        getBackTranslation: function (langcode) {
            switch (langcode) {
            case 'de':
                return 'Abbrechen';
            case 'pt':
            case 'es':
                return 'Cancelar';
            case 'it':
                return 'Annulla';
            case 'da':
                return 'Annuller';
            case 'pl':
                return 'Przerwij';
            case 'ru':
                return 'Отмена';
            case 'fr':
                return 'Annuler';
            case 'ch':
            case 'zh':
                return '取消';
            default:
                return "Cancel";
            }
        },
        getDocumentTypeTranslation: function (langcode, document_type) {
            switch (document_type) {
            case 'Declaration of confirmity':
                switch (langcode) {
                case 'de':
                    return 'Konformitätserklärung';
                case 'pt':
                    return 'Declaração de conformidade';
                case 'es':
                    return 'Declaración de conformidad';
                case 'it':
                    return 'Dichiarazione di conformità';
                case 'da':
                    return 'Overensstemmelseserklæring';
                case 'pl':
                    return 'Deklaracja zgodności';
                case 'ru':
                    return 'Декларация о соответствии';
                case 'fr':
                    return "Déclaration de conformité";
                case 'ch':
                case 'zh':
                    return '符合性声明';
                default:
                    return document_type;

                }
            case 'Presentation':
                switch (langcode) {
                case 'de':
                    return 'Präsentation';
                case 'pt':
                    return 'Apresentação ';
                case 'es':
                    return 'Presentación';
                case 'it':
                    return 'Presentazione';
                case 'da':
                    return 'Præsentation';
                case 'pl':
                    return 'Prezentacja';
                case 'ru':
                    return 'Презентация';
                case 'fr':
                    return 'Présentation';
                case 'ch':
                case 'zh':
                    return '介绍';
                default:
                    return document_type;

                }
            case 'Image':
                switch (langcode) {
                case 'de':
                    return 'Bild';
                case 'pt':
                    return 'Imagem';
                case 'es':
                    return 'Imagen';
                case 'it':
                    return 'Immagine';
                case 'da':
                    return 'Billede';
                case 'pl':
                    return 'Zdjęcie';
                case 'ru':
                    return 'Снимок';
                case 'ch':
                case 'zh':
                    return '图片';
                default:
                    return document_type;

                }
            case 'Service':
                switch (langcode) {
                case 'pt':
                    return 'Serviço';
                case 'es':
                    return 'Mantenimiento';
                case 'it':
                    return 'Assistenza';
                case 'pl':
                    return 'Serwis';
                case 'ru':
                    return 'Сервис';
                case 'fr':
                    return 'Entretien';
                case 'ch':
                case 'zh':
                    return '服务';
                default:
                    return document_type;

                }
            case 'Operating Instructions':
                switch (langcode) {
                case 'de':
                    return 'Gebrauchsanweisung';
                case 'pt':
                    return 'Instruções de utilização';
                case 'es':
                    return 'Instrucciones para uso';
                case 'it':
                    return "Istruzioni d'uso";
                case 'da':
                    return 'Brugsvejledning';
                case 'pl':
                    return 'Instrukcja obslugi';
                case 'ru':
                    return 'Pуководство по эксплуатации';
                case 'fr':
                    return "Notice d'utilisation";
                case 'ch':
                case 'zh':
                    return '使用说明';
                default:
                    return document_type;

                }
            case 'Installation instructions':
                switch (langcode) {
                case 'de':
                    return 'Installationsanleitung';
                case 'pt':
                    return 'Instruções de instalação';
                case 'es':
                    return 'Instrucciones para la instalación';
                case 'it':
                    return "Istruzioni per l'installazione";
                case 'da':
                    return 'Installationsvejledning';
                case 'pl':
                    return 'Instrukcja instalacji';
                case 'ru':
                    return 'Руководство по установке';
                case 'fr':
                    return "Instructions d'installation";
                case 'ch':
                case 'zh':
                    return '安装说明';
                default:
                    return document_type;

                }
            case 'Installation and configuration guide':
                switch (langcode) {
                case 'de':
                    return 'Installations- und Konfigurationsanleitung';
                case 'pt':
                    return 'Manual de instalação e de configuração';
                case 'es':
                    return 'Instrucciones de mantenimiento y reparación';
                case 'it':
                    return 'Istruzioni per la manutenzione e la riparazione';
                case 'da':
                    return 'Vedligeholdelses- og reparationsvejledning';
                case 'pl':
                    return 'Instrukcja konserwacji i napraw';
                case 'ru':
                    return 'Руководство по техобслуживанию и ремонту';
                case 'fr':
                    return 'Notice d’entretien et de réparation';
                case 'ch':
                case 'zh':
                    return '维护和维修指南';
                default:
                    return document_type;

                }
            case 'Manual':
                switch (langcode) {
                case 'de':
                    return 'Handbuch';
                case 'it':
                    return 'Manuale';
                case 'pl':
                    return 'Podrecznik';
                case 'ru':
                    return 'Справочник';
                case 'fr':
                    return 'Manuel';
                case 'ch':
                case 'zh':
                    return '用户指南';
                default:
                    return document_type;

                }
            case 'Maintenance and repair instructions':
                switch (langcode) {
                case 'de':
                    return 'Wartungs- und Reparaturanleitung';
                case 'pt':
                    return 'Manual de manutenção e reparação';
                case 'es':
                    return 'Instrucciones de mantenimiento y reparación';
                case 'it':
                    return 'Istruzioni per la manutenzione e la riparazione';
                case 'da':
                    return 'Vedligeholdelses- og reparationsvejledning';
                case 'pl':
                    return 'Instrukcja konserwacji i napraw';
                case 'ru':
                    return 'Руководство по техобслуживанию и ремонту';
                case 'fr':
                    return 'Notice d’entretien et de réparation';
                case 'ch':
                case 'zh':
                    return '维护和维修指南';
                default:
                    return document_type;

                }
            case 'Information':
                switch (langcode) {
                case 'pt':
                    return 'Informação';
                case 'es':
                    return 'Información';
                case 'it':
                    return 'Informazioni';
                case 'pl':
                    return 'Informacje';
                case 'ru':
                    return 'Информация';
                case 'ch':
                case 'zh':
                    return '信息';
                default:
                    return document_type;

                }
            case 'Training':
                switch (langcode) {
                case 'de':
                    return 'Schulung';
                case 'pt':
                    return 'Formação';
                case 'es':
                    return 'Formación';
                case 'it':
                    return 'Formazione';
                case 'da':
                    return 'Træning';
                case 'pl':
                    return 'Szkolenie';
                case 'ru':
                    return 'Обучение';
                case 'fr':
                    return 'Formation';
                case 'ch':
                case 'zh':
                    return '培训';
                default:
                    return document_type;

                }
            case 'Short introduction':
                switch (langcode) {
                case 'de':
                    return 'Kurzanleitung';
                case 'pt':
                    return 'Breves instruções';
                case 'es':
                    return 'Instrucciones breves';
                case 'it':
                    return 'Istruzioni brevi';
                case 'da':
                    return 'Hurtigvejledning';
                case 'pl':
                    return 'Skrócona instrukcja';
                case 'ru':
                    return 'Краткая инструкция';
                case 'fr':
                    return 'Notice courte';
                case 'ch':
                case 'zh':
                    return '快速参考指南';
                default:
                    return document_type;

                }
            case 'Label':
                switch (langcode) {
                case 'de':
                    return 'Etikett';
                case 'pt':
                    return 'Etichetta';
                case 'es':
                    return 'Etiqueta';
                case 'it':
                    return '';
                case 'da':
                    return 'Etikette';
                case 'pl':
                    return 'Etykieta';
                case 'ru':
                    return 'Этикетка';
                case 'fr':
                    return 'Étiquette';
                case 'ch':
                case 'zh':
                    return '标签';
                default:
                    return document_type;

                }
            case 'Movie':
            case 'Film':
                switch (langcode) {
                case 'de':
                    return 'Movie';
                case 'pt':
                    return 'Filme';
                case 'es':
                    return 'Película';
                case 'it':
                    return 'Filmato';
                case 'ru':
                    return 'Фильм';
                case 'ch':
                case 'zh':
                    return '电影';
                default:
                    return document_type;

                }
            case 'Poster':
                switch (langcode) {
                case 'es':
                    return 'Póster';
                case 'pl':
                    return 'Plakat';
                case 'ru':
                    return 'Постер';
                case 'ch':
                case 'zh':
                    return '海报';
                default:
                    return document_type;

                }
            case 'Brochure':
                switch (langcode) {
                case 'de':
                    return 'Prospekt';
                case 'pt':
                    return 'Folheto';
                case 'es':
                    return 'Prospecto';
                case 'it':
                    return 'Prospetto';
                case 'ru':
                    return 'Проспект';
                case 'fr':
                    return 'Prospectus';
                case 'ch':
                case 'zh':
                    return '产品广告单';
                default:
                    return document_type;

                }
            case 'Other':
                switch (langcode) {
                case 'de':
                    return 'Sonstiges';
                case 'pt':
                    return 'Outros';
                case 'es':
                    return 'Otros';
                case 'it':
                    return 'Altro';
                case 'da':
                    return 'Andet';
                case 'pl':
                    return 'Inne';
                case 'ru':
                    return 'Другое';
                case 'fr':
                    return 'Divers';
                case 'ch':
                case 'zh':
                    return '其他';
                default:
                    return document_type;

                }
            case 'Safety data sheet':
                switch (langcode) {
                case 'de':
                    return 'Sicherheitsdatenblatt';
                case 'pt':
                    return 'Folha dos dados de segurança';
                case 'es':
                    return 'Hoja de datos de seguridad';
                case 'it':
                    return 'Specifiche di sicurezza';
                case 'da':
                    return 'Sikkerhedsdatablad';
                case 'pl':
                    return 'Karty charakterystyki';
                case 'ru':
                    return 'Паспорт безопасности';
                case 'fr':
                    return 'Fiche de données de sécurité';
                case 'ch':
                case 'zh':
                    return '安全数据表';
                default:
                    return document_type;

                }
            case 'Certificate':
                switch (langcode) {
                case 'de':
                    return 'Zertifikat';
                case 'pt':
                case 'es':
                    return 'Certificado';
                case 'it':
                    return 'Certificato';
                case 'da':
                    return 'Certifikat';
                case 'pl':
                    return 'Certyfikat';
                case 'ru':
                    return 'Сертификат';
                case 'fr':
                    return 'Certificat';
                case 'ch':
                case 'zh':
                    return '安全数据表';
                default:
                    return document_type;

                }
            case 'Operating instructions':
                switch (langcode) {
                case 'de':
                    return 'Betriebsanweisung';
                case 'pt':
                    return 'Instruções de funcionamento';
                case 'es':
                    return 'Instrucciones de servicio';
                case 'it':
                    return "Istruzioni per l'uso";
                case 'da':
                    return 'Driftsvejledning';
                case 'pl':
                    return 'Instrukcja obslugi';
                case 'ru':
                    return 'Инструкция по эксплуатации';
                case 'fr':
                    return 'Notice d‘utilisation';
                case 'ch':
                case 'zh':
                    return '操作说明';
                default:
                    return document_type;

                }
            case 'Declaration of confirmity':
                switch (langcode) {
                case 'de':
                    return '';
                case 'pt':
                case 'es':
                    return '';
                case 'it':
                    return '';
                case 'da':
                    return '';
                case 'pl':
                    return '';
                case 'ru':
                    return '';
                case 'fr':
                    return '';
                case 'ch':
                case 'zh':
                    return '';
                default:
                    return document_type;

                }
            case 'Software':
                switch (langcode) {
                case 'pl':
                    return 'Oprogramowanie';
                case 'ru':
                    return 'Программное обеспечение';
                case 'fr':
                    return 'Logiciel';
                case 'ch':
                case 'zh':
                    return '软件';
                default:
                    return document_type;

                }
            case 'Form':
                switch (langcode) {
                case 'de':
                    return 'Formular';
                case 'pt':
                    return 'Formulário';
                case 'es':
                    return 'Formulario';
                case 'it':
                    return 'Formulairio';
                case 'pl':
                    return 'Formularz';
                case 'ru':
                    return 'Формуляр';
                case 'fr':
                    return 'Formulaire';
                case 'ch':
                case 'zh':
                    return '表格';
                default:
                    return document_type;

                }
            case 'Product information':
                switch (langcode) {
                case 'de':
                    return 'Produktinformation';
                case 'pt':
                    return 'Informações sobre o produto';
                case 'es':
                    return 'Información del producto';
                case 'it':
                    return 'Informazioni sul prodotto';
                case 'pl':
                    return 'Informacje o produkcie';
                case 'ru':
                    return 'Информация о продукте';
                case 'fr':
                    return 'Information produit';
                case 'ch':
                case 'zh':
                    return '产品信息';
                default:
                    return document_type;

                }
            case 'Planning data':
                switch (langcode) {
                case 'de':
                    return 'Planungsdaten';
                case 'pt':
                    return 'Dados de planeamento';
                case 'es':
                    return 'Datos de planificación';
                case 'it':
                    return 'Dati di pianificazione';
                case 'da':
                    return 'Planlægningsdata';
                case 'pl':
                    return 'Dane dot. planowania';
                case 'ru':
                    return 'Данные по планированию';
                case 'fr':
                    return 'Données de planification';
                case 'ch':
                case 'zh':
                    return '计划数据';
                default:
                    return document_type;

                }
            }
        },
        getDocumentTypeEN: function (doctype) {
            switch (doctype) {
            case 'Konformitätserklärung':
            case 'Declaration of confirmity':
            case 'Déclaration de conformité':
            case 'Declaración de conformidad':
            case 'Dichiarazione di conformità':
            case 'Declaração de conformidade':
            case 'Overensstemmelseserklæring':
            case 'Декларация о соответствии':
            case 'Deklaracja zgodności':
            case '符合性声明':
                return 'Declaration of confirmity';

            case 'Präsentation':
            case 'Présentation':
            case 'Presentación':
            case 'Presentazione':
            case 'Apresentação':
            case 'Præsentation':
            case 'Презентация':
            case 'Prezentacja':
            case '介绍':
                return 'Presentation';

            case 'Bild':
            case 'Imagen':
            case 'Immagine':
            case 'Imagem':
            case 'Billede':
            case 'Снимок':
            case 'Zdjęcie':
            case '图片':
                return 'Image';

            case 'Entretien':
            case 'Mantenimiento':
            case 'Assistenza':
            case 'Serviço':
            case 'Сервис':
            case 'Serwis':
            case '服务':
                return 'Service';

            case 'Gebrauchsanweisung':
            case "Notice d'utilisation":
            case 'Instrucciones para uso':
            case "Istruzioni d'uso":
            case 'Instruções de utilização':
            case 'Brugsvejledning': //da
            case 'Pуководство по эксплуатации':
            case 'Instrukcja obslugi': //pl
            case '使用说明':
                return 'Operating Instructions';

            case "Instructions d'installation":
            case "Istruzioni per l'installazione":
            case 'Installationsanleitung':
            case 'Instrucciones para la instalación':
            case 'Instruções de instalação':
            case 'Installationsvejledning':
            case 'Руководство по установке':
            case 'Instrukcja instalacji':
            case '安装说明':
                return 'Installation instructions';

            case 'Installations- und Konfigurationsanleitung':
            case 'Notice d’installation et de configuration':
            case 'Instrucciones de instalación y configuración':
            case "Istruzioni per l'installazione e la configurazione":
            case 'Manual de instalação e de configuração':
            case 'Installations- og konfigurationsvejledning':
            case 'Руководство по установке и настройке':
            case 'Instrukcja instalacji i konfiguracji':
            case '安装说明':
                return 'Installation and configuration guide';

            case 'Handbuch':
            case 'Manuel':
            case 'Manuale':
            case 'Справочник':
            case 'Podrecznik':
            case '用户指南':
                return 'Manual';

            case 'Wartungs- und Reparaturanleitung':
            case 'Notice d’entretien et de réparation':
            case 'Instrucciones de mantenimiento y reparación':
            case 'Manual de manutenção e reparação':
            case 'Istruzioni per la manutenzione e la riparazione':
            case 'Vedligeholdelses- og reparationsvejledning':
            case 'Руководство по техобслуживанию и ремонту':
            case 'Instrukcja konserwacji i napraw':
            case 'Manual de instalação e de configuração':
            case '维护和维修指南':
                return 'Maintenance and repair instructions';

            case 'Información':
            case 'Informazioni':
            case 'Informação':
            case 'Информация':
            case 'Informacje':
            case '信息':
                return 'Information';

            case 'Schulung':
            case 'Formation':
            case 'Formación':
            case 'Formazione':
            case 'Formação':
            case 'Træning':
            case 'Обучение':
            case 'Szkolenie':
            case '培训':
                return 'Training';

            case 'Kurzanleitung':
            case 'Notice courte':
            case 'Instrucciones breves':
            case 'Istruzioni brevi':
            case 'Breves instruções':
            case 'Hurtigvejledning':
            case 'Краткая инструкция':
            case 'Skrócona instrukcja':
            case '快速参考指南':
                return 'Short introduction';

            case 'Etikett':
            case 'Étiquette':
            case 'Etiqueta':
            case 'Etichetta':
            case 'Etikette':
            case 'Этикетка':
            case 'Etykieta':
            case '标签':
                return 'Label';

            case 'Film':
            case 'Película':
            case 'Filmato':
            case 'Filme':
            case 'Фильм':
            case '电影':
                return 'Movie';

            case 'Póster':
            case 'Постер':
            case 'Plakat':
            case '海报':
                return 'Poster';

            case 'Prospekt':
            case 'Prospectus':
            case 'Prospecto':
            case 'Prospetto':
            case 'Folheto':
            case 'Проспект':
            case '产品广告单':
                return 'Brochure';

            case 'Sonstiges':
            case 'Divers':
            case 'Otros':
            case 'Altro':
            case 'Outros':
            case 'Andet':
            case 'Другое':
            case 'Inne':
            case '其他':
                return 'Other';

            case 'Sicherheitsdatenblatt':
            case 'Fiche de données de sécurité':
            case 'Hoja de datos de seguridad':
            case 'Specifiche di sicurezza':
            case 'Folha dos dados de segurança':
            case 'Sikkerhedsdatablad':
            case 'Паспорт безопасности':
            case 'Karty charakterystyki':
            case '安全数据表':
                return 'Safety data sheet';

            case 'Zertifikat':
            case 'Certificat':
            case 'Certificado':
            case 'Certificato':
            case 'Certifikat':
            case 'Сертификат':
            case 'Certyfikat':
            case '安全数据表':
                return 'Certificate';

            case 'Betriebsanweisung':
            case 'Notice d‘utilisation':
            case 'Instrucciones de servicio':
            case "Istruzioni per l'uso":
            case 'Instruções de funcionamento':
            case 'Driftsvejledning':
            case 'Инструкция по эксплуатации':
            case 'Instrukcja obslugi':
            case '操作说明':
                return 'Operating instructions';

            case 'Logiciel':
            case 'Программное обеспечение':
            case 'Oprogramowanie':
            case '软件':
                return 'Software';

            case 'Formular':
            case 'Formulaire':
            case 'Formulario':
            case 'Formulairio':
            case 'Formulário':
            case 'Формуляр':
            case 'Formularz':
            case '表格':
                return 'Form';

            case 'Produktinformation':
            case 'Information produit':
            case 'Información del producto':
            case 'Informazioni sul prodotto':
            case 'Informações sobre o produto':
            case 'Информация о продукте':
            case 'Informacje o produkcie':
            case '产品信息':
                return 'Product information';

            case 'Planungsdaten':
            case 'Données de planification':
            case 'Datos de planificación':
            case 'Dati di pianificazione':
            case 'Dados de planeamento':
            case 'Planlægningsdata':
            case 'Данные по планированию':
            case 'Dane dot. planowania':
            case '计划数据':
                return 'Planning data';
            default:
                return doctype;
            }
        },
        getDocumentTypeID: function (doctype) {
            switch (doctype) {

            case 'Konformitätserklärung':
            case 'Declaration of confirmity':
            case 'Déclaration de conformité':
            case 'Declaración de conformidad':
            case 'Dichiarazione di conformità':
            case 'Declaração de conformidade':
            case 'Overensstemmelseserklæring':
            case 'Декларация о соответствии':
            case 'Deklaracja zgodności':
            case '符合性声明':
                return 1025;

            case 'Präsentation':
            case 'Presentation':
            case 'Présentation':
            case 'Presentación':
            case 'Presentazione':
            case 'Apresentação':
            case 'Præsentation':
            case 'Презентация':
            case 'Prezentacja':
            case '介绍':
                return 1026;

            case 'Bild':
            case 'Image':
            case 'Imagen':
            case 'Immagine':
            case 'Imagem':
            case 'Billede':
            case 'Снимок':
            case 'Zdjęcie':
            case '图片':
                return 1027;

            case 'Service':
            case 'Entretien':
            case 'Mantenimiento':
            case 'Assistenza':
            case 'Serviço':
            case 'Сервис':
            case 'Serwis':
            case '服务':
                return 1028;

            case 'Gebrauchsanweisung':
            case "Notice d'utilisation":
            case 'Instrucciones para uso':
            case "Istruzioni d'uso":
            case 'Instruções de utilização':
            case 'Brugsvejledning': //da
            case 'Pуководство по эксплуатации':
            case 'Instrukcja obslugi': //pl
            case 'Operating Instructions':
            case '使用说明':
                return 1001;

            case 'Installation instructions':
            case "Instructions d'installation":
            case "Istruzioni per l'installazione":
            case 'Installationsanleitung':
            case 'Instrucciones para la instalación':
            case 'Instruções de instalação':
            case 'Installationsvejledning':
            case 'Руководство по установке':
            case 'Instrukcja instalacji':
            case '安装说明':
                return 1002;

            case 'Installations- und Konfigurationsanleitung':
            case 'Installation and configuration guide':
            case 'Notice d’installation et de configuration':
            case 'Instrucciones de instalación y configuración':
            case "Istruzioni per l'installazione e la configurazione":
            case 'Manual de instalação e de configuração':
            case 'Installations- og konfigurationsvejledning':
            case 'Руководство по установке и настройке':
            case 'Instrukcja instalacji i konfiguracji':
            case '安装说明':
                return 1003;

            case 'Handbuch':
            case 'Manual':
            case 'Manuel':
            case 'Manuale':
            case 'Справочник':
            case 'Podrecznik':
            case '用户指南':
                return 1004;

            case 'Wartungs- und Reparaturanleitung':
            case 'Maintenance and repair instructions':
            case 'Notice d’entretien et de réparation':
            case 'Instrucciones de mantenimiento y reparación':
            case 'Istruzioni per la manutenzione e la riparazione':
            case 'Vedligeholdelses- og reparationsvejledning':
            case 'Руководство по техобслуживанию и ремонту':
            case 'Instrukcja konserwacji i napraw':
            case '维护和维修指南':
                return 1005;

            case 'Information':
            case 'Información':
            case 'Informazioni':
            case 'Informação':
            case 'Информация':
            case 'Informacje':
            case '信息':
                return 1006;

            case 'Schulung':
            case 'Training':
            case 'Formation':
            case 'Formación':
            case 'Formazione':
            case 'Formação':
            case 'Træning':
            case 'Обучение':
            case 'Szkolenie':
            case '培训':
                return 1007;

            case 'Kurzanleitung':
            case 'Short introduction':
            case 'Notice courte':
            case 'Instrucciones breves':
            case 'Istruzioni brevi':
            case 'Breves instruções':
            case 'Hurtigvejledning':
            case 'Краткая инструкция':
            case 'Skrócona instrukcja':
            case '快速参考指南':
                return 1008;

            case 'Etikett':
            case 'Label':
            case 'Étiquette':
            case 'Etiqueta':
            case 'Etichetta':
            case 'Etikette':
            case 'Этикетка':
            case 'Etykieta':
            case '标签':
                return 1009;

            case 'Film':
            case 'Movie':
            case 'Película':
            case 'Filmato':
            case 'Filme':
            case 'Фильм':
            case '电影':
                return 1014;

            case 'Poster':
            case 'Póster':
            case 'Постер':
            case 'Plakat':
            case '海报':
                return 1015;

            case 'Prospekt':
            case 'Prospectus':
            case 'Prospecto':
            case 'Brochure':
            case 'Prospetto':
            case 'Folheto':
            case 'Проспект':
            case '产品广告单':
                return 1016;

            case 'Other':
            case 'Sonstiges':
            case 'Divers':
            case 'Otros':
            case 'Altro':
            case 'Outros':
            case 'Andet':
            case 'Другое':
            case 'Inne':
            case '其他':
                return 1017;

            case 'Sicherheitsdatenblatt':
            case 'Safety data sheet':
            case 'Fiche de données de sécurité':
            case 'Hoja de datos de seguridad':
            case 'Specifiche di sicurezza':
            case 'Folha dos dados de segurança':
            case 'Sikkerhedsdatablad':
            case 'Паспорт безопасности':
            case 'Karty charakterystyki':
            case '安全数据表':
                return 1018;

            case 'Zertifikat':
            case 'Certificate':
            case 'Certificat':
            case 'Certificado':
            case 'Certificato':
            case 'Certifikat':
            case 'Сертификат':
            case 'Certyfikat':
            case '安全数据表':
                return 1019;

            case 'Betriebsanweisung':
            case 'Operating instructions':
            case 'Notice d‘utilisation':
            case 'Instrucciones de servicio':
            case "Istruzioni per l'uso":
            case 'Instruções de funcionamento':
            case 'Driftsvejledning':
            case 'Инструкция по эксплуатации':
            case 'Instrukcja obslugi':
            case '操作说明':
                return 1020;

            case 'Software':
            case 'Logiciel':
            case 'Программное обеспечение':
            case 'Oprogramowanie':
            case '软件':
                return 1021;

            case 'Formular':
            case 'Form':
            case 'Formulaire':
            case 'Formulario':
            case 'Formulairio':
            case 'Formulário':
            case 'Формуляр':
            case 'Formularz':
            case '表格':
                return 1022;

            case 'Produktinformation':
            case 'Product information':
            case 'Information produit':
            case 'Información del producto':
            case 'Informazioni sul prodotto':
            case 'Informações sobre o produto':
            case 'Информация о продукте':
            case 'Informacje o produkcie':
            case '产品信息':
                return 1023;

            case 'Planungsdaten':
            case 'Planning data':
            case 'Données de planification':
            case 'Datos de planificación':
            case 'Dati di pianificazione':
            case 'Dados de planeamento':
            case 'Planlægningsdata':
            case 'Данные по планированию':
            case 'Dane dot. planowania':
            case '计划数据':
                return 1024;
            default:
                return -1;

            }
        },
        getLangID: function (langCode) {
            switch (langCode) {
            case 'de':
                return 49;
            case 'en':
                return 44;
            case 'es':
                return 34;
            case 'it':
                return 39;
            case 'fr':
                return 33;
            case 'pt':
                return 351;
            case 'pl':
                return 48;
            case 'da':
                return 45;
            case 'ru':
                return 7;
            case 'ch':
            case 'zh':
                return 86;
            default:
                return -1;
            }
        },
        // Zu "Letzte Suchen" hinzufügen
        addSuchbegriff: function (suchbegriff) {
            if (localStorage["mylastsearches"] == undefined) {
                var a = [];
                a.unshift(suchbegriff);

                window.localStorage["mylastsearches"] = JSON.stringify(a);
                //$scope.$apply;

                console.log("searches setted: " + suchbegriff);
            } else {
                var a = [];
                a = JSON.parse(localStorage["mylastsearches"]);

                a.unshift(suchbegriff);
                window.localStorage["mylastsearches"] = JSON.stringify(a);
                console.log("searches setted: " + suchbegriff);
            }
        },
        //Letzte Suchen holen
        getSearches: function () {
            var suchbegriffe = [];
            if (localStorage["mylastsearches"] == undefined) {} else {
                var suchbegriffe = JSON.parse(localStorage["mylastsearches"]);
                console.log("searches got: " + suchbegriffe.length);
            }
            return suchbegriffe;
        },
        alerttest: function () {
            alert('TEST');
        },
        setSearchValue: function (searchvalue) {
            window.localStorage['searchvalue'] = searchvalue;
            console.log("SearchValueService setted: " + searchvalue);
        },
        getSearchValue: function () {
            console.log("SearchValueService got: " + window.localStorage['searchvalue']);
            return window.localStorage['searchvalue'] + "";
        },
        setArticleNo: function (searchvalue) {
            window.localStorage['articleno'] = searchvalue;
            console.log("SearchValueService setted: " + searchvalue);
        },
        getArticleNo: function () {
            console.log("SearchValueService got: " + window.localStorage['articleno']);
            return window.localStorage['articleno'] + "";
        },
        getSerial: function () {
            console.log("SearchValueService got: " + window.localStorage['serial']);
            return window.localStorage['serial'] + "";
        },
        setSalesGroup: function (searchvalue) {
            window.localStorage['salesgroup'] = searchvalue;
            console.log("SearchValueService salesgroup setted: " + searchvalue);
        },
        setSerial: function (serial) {
            window.localStorage['serial'] = serial;
            console.log("SearchValueService serial setted: " + serial);
        },
        setSurgery: function (searchvalue) {
            window.localStorage['surgery'] = searchvalue;
            console.log("SearchValueService surgery setted: " + searchvalue);
        },
        getSalesGroup: function () {
            console.log("SearchValueService salesgroup got: " + window.localStorage['salesgroup']);
            return window.localStorage['salesgroup'] + "";
        },
        getSurgery: function () {
            console.log("SearchValueService surgery got: " + window.localStorage['surgery']);
            return window.localStorage['surgery'] + "";
        },
        setDoctype: function (doctype) {
            window.localStorage['doctype'] = doctype;
            console.log("SearchValueService doctype setted: " + doctype);
        },
        getDoctype: function () {
            console.log("SearchValueService doctype got: " + window.localStorage['doctype']);
            return window.localStorage['doctype'] + "";
        }
    }
})

// Set or get history searches (scanned or from select after search)
.service('HistoryService', function () {
    console.log("HistoryService setup done");
    return {
        // Zu "Letzte Suchen" hinzufügen
        addArticle: function (artname, image, serialno, datum, salesgroup, articleno) {
            
            var suchbegriff = [{
                    Bezeichnung: artname,
                    Bild: image,
                    serial: serialno,
                    date: datum,
                    salesgroup: salesgroup,
                    articleno: articleno
            }
            ];
            if (localStorage["history"] == undefined || localStorage["history"] === "") {
                var a = [];
                a.unshift(suchbegriff);
                window.localStorage["history"] = JSON.stringify(a);
                //$scope.$apply;

                console.log("history setted: " + suchbegriff);
            } else {
                var a = [];
                a = JSON.parse(localStorage["history"]);

                for (var i = a.length - 1; i >= 0; i--) {
                    //alert(a[i][0].Bezeichnung);
                    if (a[i][0].Bezeichnung == artname) {

                        a.splice(i, 1);
                    }
                }

                a.unshift(suchbegriff);
                window.localStorage["history"] = JSON.stringify(a);
                console.log("history setted: " + suchbegriff);
            }
            console.log('History - addArticle', window.localStorage["history"]);
        },
        //Letzte history holen
        getArticles: function () {

            console.log('History - getArticles: ', window.localStorage["history"]);
            var history = localStorage["history"];
            if(localStorage["history"] == undefined || history === "")
            {
                return [];
            }
            else
            {
                return JSON.parse(history);
            }
        },
        clearHistory: function () {
            var a = [];

            //a = JSON.parse(localStorage["history"]);
            //alert(a[i][0].Bezeichnung);
            //a.splice(0, a.length);
            //window.localStorage["history"] = JSON.stringify(a);
            window.localStorage["history"] = "";

            console.log('History - cleared', window.localStorage["history"]);
            return true;
        },
        getLastarticle: function () {
            
            if (localStorage["history"] == undefined || localStorage["history"] === "") {
               console.log("empty history");
            } else {
                var history = JSON.parse(localStorage["history"]);
                var lastarticle = history[0]
                return lastarticle;

            }
        }
    }
})

// Sett or get downdload history
.service('DownloadHistoryService', function () {
    console.log("DownloadHistoryService setup done");
    return {
        // Zu "Letzte Suchen" hinzufügen
        addDownload: function (artname, doctype, serialno, filetype, salesgroup, filepath, size, date) {

            var downloadset = [{
                    artname: artname,
                    doctype: doctype,
                    serialno: serialno,
                    filetype: filetype,
                    salesgroup: salesgroup,
                    filepath: filepath,
                    size: size,
                    date: date
            }
            ];

            if (localStorage["downloadhistory"] == undefined) {
                var a = [];
                a.unshift(downloadset);
                window.localStorage["downloadhistory"] = JSON.stringify(a);
                //$scope.$apply;

                console.log("downloadhistory setted: " + downloadset);
            } else {
                var a = [];
                a = JSON.parse(localStorage["downloadhistory"]);

                a.unshift(downloadset);
                window.localStorage["downloadhistory"] = JSON.stringify(a);
                console.log("downloadhistory setted: " + downloadset);
            }
        },
        //Letzte history holen
        getDownloads: function () {
            var history = [];
            if (localStorage["downloadhistory"] == undefined) {
                //alert("history got: 0" );
            } else {
                var history = JSON.parse(localStorage["downloadhistory"]);

                return history;

            }
        }
    }
})

// Set or get login values
.service('UserLoginService', function () {
    console.log("SearchValueService setup done");
    return {

        // get or set userdata
        setUserName: function (username) {

            window.localStorage['username'] = username;
            console.log("username setted: " + username);

        },
        setRemember: function (remember) {
            window.localStorage['remember'] = remember;
            console.log("remember setted: " + remember);
        },
        setUserPassword: function (userpassword) {

            window.localStorage['userpassword'] = userpassword;
            console.log("userpassword setted: " + userpassword);

        },
        setFirstname: function (name) {
            window.localStorage['firstname'] = name;

            console.log("firstname setted: " + name);

        },
        setLastname: function (name) {
            window.localStorage['lastname'] = name;
            console.log("lastname setted: " + name);

        },
        setUserID: function (userid) {
            window.localStorage['userid'] = userid;
            console.log("userid setted: " + userid);

        },
        setUsermail: function (usermail) {
            window.localStorage['usermail'] = usermail;
            console.log("usermail setted: " + usermail);

        },
        setUsercompany: function (usercompany) {
            window.localStorage['usercompany'] = usercompany;
            console.log("usercompany setted: " + usercompany);

        },
        setCustomerno: function (customerno) {
            window.localStorage['customerno'] = customerno;
            console.log("customerno setted: " + customerno);

        },
        setCustomercounry: function (customercountry) {
            window.localStorage['customerno'] = customercountry;
            console.log("customerno setted: " + customercountry);

        },
        getUserPassword: function () {
            console.log("userpassword got: " + window.localStorage['userpassword']);
            return window.localStorage['userpassword'] + "";
        },
        getRemember: function () {
            console.log("remember got: " + window.localStorage['remember']);
            return window.localStorage['remember'] + "";
        },
        getUserName: function () {
            console.log("username got: " + window.localStorage['username']);
            return window.localStorage['username'] + "";
        },
        getFirstname: function () {
            console.log("firstname got: " + window.localStorage['firstname']);
            return window.localStorage['firstname'] + "";
        },
        getLastname: function () {
            console.log("lastname got: " + window.localStorage['lastname']);
            return window.localStorage['lastname'] + "";
        },
        getUserID: function () {
            console.log("userid got: " + window.localStorage['userid']);
            return window.localStorage['userid'] + "";
        },
        getUsermail: function () {
            console.log("usermail got: " + window.localStorage['usermail']);
            return window.localStorage['usermail'] + "";
        },
        getUsercompany: function () {
            console.log("usercompany got: " + window.localStorage['usercompany']);
            return window.localStorage['usercompany'] + "";
        },
        getCustomerno: function () {
            console.log("customerno got: " + window.localStorage['customerno']);
            return window.localStorage['customerno'] + "";
        },
        getCustomecountry: function () {
            console.log("customercountry got: " + window.localStorage['customercountry']);
            return window.localStorage['customercountry'] + "";
        }

    }
})

// Set or get settings values
.service('SettingsService', function () {
    console.log("SettingsService setup done");
    return {

        // get or set userdata
        setApplang: function (applang) {
            window.localStorage['applang'] = applang;
            console.log("applang setted: " + applang);
        },
        setDoclang: function (doclang) {
            window.localStorage['doclang'] = doclang;
            console.log("doclang setted: " + doclang);
        },
        setShowIntro: function (showintro) {
            window.localStorage['showintro'] = showintro;
            console.log("showintro setted: " + showintro);
        },
        getApplang: function () {
            console.log("applang got: " + window.localStorage['applang']);
            return window.localStorage['applang'] + "";
        },
        getDoclang: function () {
            console.log("doclang got: " + window.localStorage['doclang']);
            return window.localStorage['doclang'] + "";
        },
        getShowIntro: function () {
            console.log("showintro got: " + window.localStorage['showintro']);
            return window.localStorage['showintro'] + "";
        }
    }
})

// Set or get settings values
.service('RegisterDeviceService', function () {
    console.log("RegisterDeviceService setup done");
    return {

        // get or set articledata
        setArtno: function (artno) {

            window.localStorage['regartno'] = artno;
            console.log("regartno setted: " + artno);
        },
        setSerial: function (serial) {
            window.localStorage['regserial'] = serial;
            console.log("regserial setted: " + serial);
        },
        setArtname: function (artname) {
            window.localStorage['regartname'] = artname;
            console.log("regartname setted: " + artname);
        },
        getArtno: function () {
            console.log("regartno got: " + window.localStorage['regartno']);
            return window.localStorage['regartno'] + "";
        },
        getSerial: function () {
            console.log("regserial got: " + window.localStorage['regserial']);
            return window.localStorage['regserial'] + "";
        },
        getArtname: function () {
            console.log("regartname got: " + window.localStorage['regartname']);
            return window.localStorage['regartname'] + "";
        },
        addArticle: function (artname, image, serialno, datum, salesgroup, surgery, articleno) {
            //alert(serialno);
            var mydevice = [{
                    Bezeichnung: artname,
                    Bild: image,
                    serial: serialno,
                    date: datum,
                    salesgroup: salesgroup,
                    Praxis: surgery,
                    articleno: articleno
            }
            ];
            if (localStorage["mydevices"] == undefined) {
                var a = [];
                a.unshift(mydevice);
                window.localStorage["mydevices"] = JSON.stringify(a);
                //$scope.$apply;

                console.log("mydevices setted: " + mydevice);
            } else {
                var a = [];
                a = JSON.parse(localStorage["mydevices"]);

                a.unshift(mydevice);
                window.localStorage["mydevices"] = JSON.stringify(a);
                console.log("mydevices setted: " + mydevice);
            }
        },
        //Letzte history holen
        getArticles: function () {

            var mydevices = [];
            if (localStorage["mydevices"] == undefined) {
                //alert("history got: 0" );
            } else {
                var mydevices = JSON.parse(localStorage["mydevices"]);
                console.log("Return: " + mydevices.length);
                return mydevices;

            }
        }
    }
})


// ctrlctrlctrlctrlctrlctrlctrlctrlctrlctrlctrlctrlctrlctrlctrlctrlctrlctrlctrlctrlctrlctrlctrlctrl
// Controller:

// APPINTRO Controller
.controller('IntroCtrl', function (SettingsService, $ionicSideMenuDelegate, $ionicSlideBoxDelegate, HistoryBackService, $ionicViewService, $ionicPlatform, $scope, $ionicModal, $state, $timeout, $ionicLoading, SearchValueService, UserLoginService, $ionicSideMenuDelegate, $ionicPopup) {

    $ionicPlatform.ready(function () {
        $ionicSideMenuDelegate.canDragContent(false);


    });
    //kicasta added: get device language
    var applang = window.localStorage['applang'];
    //alert(applang);
    if (applang == 'undefined') {
        if (typeof navigator.globalization !== "undefined") {
            navigator.globalization.getPreferredLanguage(function (language) {
                devicelang = language.value.substr(0, 2);
                if (SearchValueService.getLangID(devicelang) != -1) {
                    SettingsService.setApplang(devicelang);
                } else {
                    SettingsService.setApplang('en');
                }
            }, null);
        }
    }
    //kicasta end
    $scope.applanguage = window.localStorage['applang'];
    // Called to navigate to the main app
    $scope.startApp = function () {
        $state.go('app.home', {}, {
                            reload: true,
                            location: 'replace'
                        });
    };
    $scope.next = function () {
        $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function () {
        $ionicSlideBoxDelegate.previous();
    };

    // Called each time the slide changes
    $scope.slideChanged = function (index) {
        $scope.slideIndex = index;
    };

    $scope.showagain = function (e) {
        SettingsService.setShowIntro(e);
    };


})

// Redirect Controller
.controller('FirstRedirectCtrl', function (SettingsService, HistoryBackService, $ionicViewService, $ionicPlatform, $scope, $ionicModal, $state, $timeout, $ionicLoading, SearchValueService, UserLoginService, $ionicSideMenuDelegate, $ionicPopup) {

    $ionicLoading.show();
    $ionicPlatform.ready(function () {
        $ionicSideMenuDelegate.canDragContent(false);
        console.log("ready");
        var showintro = SettingsService.getShowIntro();
        if (showintro == "true") {
            $state.go('app.redirect');

        } else {
            $ionicViewService.nextViewOptions({
                disableBack: true
            });

            $state.go('app.intro');
            $ionicLoading.hide();

        }


    });


})

// Redirect Controller
.controller('RedirectCtrl', function ($http, xmlParser, JsonService, HistoryBackService, $ionicViewService, $ionicPlatform, $scope, $ionicModal, $state, $timeout, $ionicLoading, SearchValueService, UserLoginService, $ionicSideMenuDelegate, $ionicPopup) {
    $ionicPlatform.ready(function () {
        // Platform stuff here.

        $ionicLoading.show();

        angular.element(document).ready(function () {
            $ionicLoading.show();

            // Parse xml and decrypt
            $http.get(
                './xml/DlcArtikelShort-2.xml', {
                    transformResponse: function (data) {
                        // convert the data to JSON and provide
                        // it to the success function below
                        var json = xmlParser.xml_str2json(data.toString());
                        JsonService.setJson(json);
                        // var title = json.Row.ArtNr;
                        $ionicLoading.hide();

                        console.log("Json Setted!");
                    }
                }
            );
        });


        HistoryBackService.setScannedLoaded("false");

        var remember = UserLoginService.getRemember();

        if (remember == "true") {
            if (navigator.connection.type == Connection.NONE || navigator.connection.type == Connection.CELL_2G) {
                var username = UserLoginService.getUserName();
                var password = UserLoginService.getUserPassword();
                loggedin = true;
                //var responsedata = $scope.loginresponsedata.data;
                $scope.loggedinuser = username;

                UserLoginService.setUserName(username);
                UserLoginService.setUserPassword(password);
                UserLoginService.setRemember("true");
                $ionicViewService.nextViewOptions({
                    disableBack: true
                });
                $ionicLoading.hide();

                $state.go("app.browse", {}, {
                    location: 'replace'
                });

            } else {
                var username = UserLoginService.getUserName();
                var password = UserLoginService.getUserPassword();
                UserLoginService.setRemember("true");
                if (username == "" || password == "") {} else {
                    $ionicLoading.show({
                        template: '<i class="icon ion-loading-d"></i>'
                    });
                    var httpReq = new plugin.HttpRequest();
                    var timer = $timeout(
                        function () {

                            loggedin = true;
                            //var responsedata = $scope.loginresponsedata.data;
                            $scope.loggedinuser = username;

                            UserLoginService.setUserName(username);
                            UserLoginService.setUserPassword(password);
                            UserLoginService.setRemember("true");
                            $ionicViewService.nextViewOptions({
                                disableBack: true
                            });
                            $ionicLoading.hide();

                            $state.go("app.browse", {}, {
                                location: 'replace'
                            });

                        },
                        2500
                    );

                    httpReq.post("http://dlc.duerrdental.com/api/", {
                        user: username,
                        pw: password,
                        app_id: "DD-ServiceAPP",
                        action: "auth",
                        debug: "0",
                        app_lang: window.localStorage['applang']
                    }, function (err, data) {
                        //alert(data);
                        $scope.loginresponsedata = JSON.parse(data);
                        //$scope.articles = JSON.stringify(data);
                        var statusresponse = $scope.loginresponsedata.status;
                        console.log("response:", statusresponse);
                        var loggedin = false;
                        var returnstatus = "";
                        UserLoginService.setUserName("");
                        UserLoginService.setUserPassword("");

                        if (angular.isDefined(statusresponse)) {
                            $timeout.cancel(timer);

                            timer.then(
                                function () {

                                    console.log("LoginTimer resolved!", Date.now());

                                },
                                function () {

                                    console.log("LoginTimer rejected!", Date.now());

                                }
                            );
                            console.log("Result: " + statusresponse);
                            if (angular.isDefined(statusresponse.USER_DATA_VALID)) {
                                loggedin = true;
                                var responsedata = $scope.loginresponsedata.data;

                                //alert(responsedata.first_name);
                                UserLoginService.setFirstname(responsedata.first_name);
                                UserLoginService.setLastname(responsedata.last_name);
                                UserLoginService.setUserID(responsedata.personal_id);
                                UserLoginService.setUsermail(responsedata.email);
                                UserLoginService.setUsercompany(responsedata.company);
                                UserLoginService.setCustomercounry(responsedata.country);
                                UserLoginService.setCustomerno(responsedata.customer_no);

                                UserLoginService.setUserName(username);
                                UserLoginService.setUserPassword(password);
                                UserLoginService.setRemember("true");
                                $ionicViewService.nextViewOptions({
                                    disableBack: true
                                });
                                $state.go("app.browse", {}, {
                                    location: 'replace'
                                });

                            } else if (angular.isDefined(statusresponse.USER_INVALID)) {
                                loggedin = false;
                                returnstatus = statusresponse.USER_INVALID;
                                var alertPopup = $ionicPopup.alert({
                                    title: '',
                                    template: "{{ 'USERNAMEERROR' | translate }}"
                                });
                                $state.go("app.home", {}, {
                                    reload: true,
                                    location: 'replace'
                                });
                            } else if (angular.isDefined(statusresponse.PW_INVALID)) {
                                loggedin = false;
                                returnstatus = statusresponse.PW_INVALID;
                                var alertPopup = $ionicPopup.alert({
                                    title: '',
                                    template: "{{ 'PWDERREROR' | translate }}"
                                });
                                $state.go("app.home", {}, {
                                    location: 'replace'
                                });

                            } else {
                                var alertPopup = $ionicPopup.alert({
                                    title: '',
                                    template: "{{ 'OTHERERROR' | translate }}"
                                });
                                $state.go("app.home", {}, {
                                    reload: true,
                                    location: 'replace'
                                });
                            }
                        }

                        $ionicLoading.hide();
                        $scope.$on(
                            "$destroy",
                            function (event) {

                                $timeout.cancel(timer);

                            }
                        );
                        //$state.go("app.browse");
                    });
                }
            }
        } else {
            $ionicViewService.nextViewOptions({
                disableBack: true
            });
            $state.go("app.home", {}, {
                reload: true,
                location: 'replace'
            });

        }




    });


})

// Main Controller
.controller('AppCtrl', function (RegisterDeviceService, HistoryBackService, $cordovaFlashlight, $ionicViewService, $ionicPlatform, $scope, $ionicModal, $state, $timeout, $ionicLoading, SearchValueService, UserLoginService, $ionicSideMenuDelegate, $ionicPopup, $ionicHistory) {
    // Form data for the login modal
    $scope.loginData = {};
    $ionicSideMenuDelegate.canDragContent(true);
    $scope.applanguage = window.localStorage['applang'];
    $scope.isAndroid = ionic.Platform.isAndroid();
    $ionicLoading.hide();
    $scope.isLongLang = SearchValueService.isLongLang(window.localStorage['applang']);
    
    switch ($scope.applanguage) {
    case 'de':
        $ionicModal.fromTemplateUrl('templates/agb.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $ionicModal.fromTemplateUrl('templates/datenschutz.html', {
            scope: $scope
        }).then(function (modal2) {
            $scope.modal2 = modal2;
        });
        break;
    case 'en':
        $ionicModal.fromTemplateUrl('templates/gtc.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $ionicModal.fromTemplateUrl('templates/data.html', {
            scope: $scope
        }).then(function (modal2) {
            $scope.modal2 = modal2;
        });
        break;

    case 'ch':
    case 'zh':
        $ionicModal.fromTemplateUrl('templates/agb_ch.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $ionicModal.fromTemplateUrl('templates/datensch_ch.html', {
            scope: $scope
        }).then(function (modal2) {
            $scope.modal2 = modal2;
        });
        break;

    case 'da':
        $ionicModal.fromTemplateUrl('templates/agb_da.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $ionicModal.fromTemplateUrl('templates/datensch_da.html', {
            scope: $scope
        }).then(function (modal2) {
            $scope.modal2 = modal2;
        });
        break;

    case 'es':
        $ionicModal.fromTemplateUrl('templates/agb_es.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $ionicModal.fromTemplateUrl('templates/datensch_es.html', {
            scope: $scope
        }).then(function (modal2) {
            $scope.modal2 = modal2;
        });
        break;

    case 'fr':
        $ionicModal.fromTemplateUrl('templates/agb_fr.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $ionicModal.fromTemplateUrl('templates/datensch_fr.html', {
            scope: $scope
        }).then(function (modal2) {
            $scope.modal2 = modal2;
        });
        break;

    case 'it':
        $ionicModal.fromTemplateUrl('templates/agb_it.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $ionicModal.fromTemplateUrl('templates/datensch_it.html', {
            scope: $scope
        }).then(function (modal2) {
            $scope.modal2 = modal2;
        });
        break;

    case 'pl':
        $ionicModal.fromTemplateUrl('templates/agb_pl.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $ionicModal.fromTemplateUrl('templates/datensch_pl.html', {
            scope: $scope
        }).then(function (modal2) {
            $scope.modal2 = modal2;
        });
        break;

    case 'pt':
        $ionicModal.fromTemplateUrl('templates/agb_pt.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $ionicModal.fromTemplateUrl('templates/datensch_pt.html', {
            scope: $scope
        }).then(function (modal2) {
            $scope.modal2 = modal2;
        });
        break;

    case 'ru':
        $ionicModal.fromTemplateUrl('templates/agb_ru.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $ionicModal.fromTemplateUrl('templates/datensch_ru.html', {
            scope: $scope
        }).then(function (modal2) {
            $scope.modal2 = modal2;
        });
        break;

    }


    $scope.filterByEN = function (document) {
        return document.lang_id == 44;
    }

    $scope.filterByAppLang = function (document) {
        return document.lang_id != 44;
    }


    // App beenden
    $scope.closeapp = function () {

        navigator.app.exitApp();
    }

    // Start Scan (for Search)
    $scope.scanBarcode = function () {


        $ionicViewService.nextViewOptions({
            disableBack: true
        });
        $state.go("app.browse", {}, {
            location: 'replace'
        });

        $ionicLoading.show({
            template: '<i class="icon ion-loading-d"></i>'
        });

        if (ionic.Platform.isAndroid()) {
            /*$cordovaFlashlight.switchOn()
                .then(
                    function (success) {  },
                    function (error) {
                        console.log(error); 
                    });*/
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    //$cordovaFlashlight.switchOff();
                    //alert("Result: " + result.text + "\n" +
                    //"Format: " + result.format + "\n" +
                    //"Cancelled: " + result.cancelled);

                    // Set the scanned value in the service for later useage

                    if (result.cancelled) {
                        $ionicLoading.hide();
                        //if(ionic.Platform.is('ios')){
                        //   window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
                        //}
                        console.log("Scanner cancelled");
                    } else {

                        if (result.text.indexOf("-") >= 0) {

                            var today = new Date();
                            // alert(today);
                            var dd = today.getDate();
                            var mm = today.getMonth() + 1; //January is 0!
                            var yyyy = today.getFullYear();

                            if (dd < 10) {
                                dd = '0' + dd
                            }

                            if (mm < 10) {
                                mm = '0' + mm
                            }
                            var minute = today.getMinutes();
                            var hour = today.getHours();
                            if (minute < 10) {
                                minute = '0' + minute
                            }
                            if (hour < 10) {
                                hour = '0' + hour
                            }
                            today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;
                            var sucharray = [{
                                    Bezeichnung: result.text,
                                    Datum: today
                     }
                     ];
                            SearchValueService.addSuchbegriff(sucharray);


                            SearchValueService.setArticleNo(result.text);

                            $ionicLoading.hide();

                            var myPopup = $ionicPopup.show({
                                title: '',
                                template: "{{ 'SCANNEDARTNR' | translate }}",
                                scope: $scope,
                                buttons: [
                                    {
                                        text: "<i class='icon ion-close-circled'></i>",
                                        onTap: function (e) {
                                            if (navigator.connection.type == Connection.NONE || navigator.connection.type == Connection.CELL_2G || navigator.connection.type == Connection.UNKNOWN) {
                                                SearchValueService.addSuchbegriff(sucharray);
                                                SearchValueService.setSerial(result.text);
                                                RegisterDeviceService.setSerial(result.text);
                                                SearchValueService.setSearchValue(result.text);
                                                $state.go("app.search");
                                            } else {
                                                $state.go("app.scanned");
                                            }
                                            RegisterDeviceService.setSerial('');
                                        }
                                },
                                    {
                                        text: "<i class='icon ion-checkmark'></i>",
                                        type: 'button-positive',
                                        onTap: function (e) {
                                            $ionicLoading.show({
                                                template: '<i class="icon ion-loading-d"></i>'
                                            });

                                            cordova.plugins.barcodeScanner.scan(
                                                function (result2) {
                                                    //alert("Result: " + result.text + "\n" +
                                                    //"Format: " + result.format + "\n" +
                                                    //"Cancelled: " + result.cancelled);

                                                    // Set the scanned value in the service for later useage

                                                    if (result2.cancelled) {
                                                        $ionicLoading.hide();
                                                        //if(ionic.Platform.is('ios')){
                                                        //   window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
                                                        //}
                                                        console.log("Scanner cancelled");

                                                        if (navigator.connection.type == Connection.NONE || navigator.connection.type == Connection.CELL_2G || navigator.connection.type == Connection.UNKNOWN) {
                                                            SearchValueService.addSuchbegriff(sucharray);
                                                            SearchValueService.setSerial(result.text);
                                                            RegisterDeviceService.setSerial(result.text);
                                                            SearchValueService.setSearchValue(result.text);
                                                            $state.go("app.search");
                                                        } else {
                                                            $state.go("app.scanned");
                                                        }
                                                    } else {
                                                        SearchValueService.setSerial(result2.text);
                                                        RegisterDeviceService.setSerial(result2.text);
                                                        var today = new Date();
                                                        // alert(today);
                                                        var dd = today.getDate();
                                                        var mm = today.getMonth() + 1; //January is 0!
                                                        var yyyy = today.getFullYear();

                                                        if (dd < 10) {
                                                            dd = '0' + dd
                                                        }

                                                        if (mm < 10) {
                                                            mm = '0' + mm
                                                        }
                                                        var minute = today.getMinutes();
                                                        var hour = today.getHours();
                                                        if (minute < 10) {
                                                            minute = '0' + minute
                                                        }
                                                        if (hour < 10) {
                                                            hour = '0' + hour
                                                        }
                                                        today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;
                                                        var sucharray = [{
                                                                Bezeichnung: result2.text,
                                                                Datum: today
                                          }
                                          ];
                                                        SearchValueService.addSuchbegriff(sucharray);
                                                        if (navigator.connection.type == Connection.NONE || navigator.connection.type == Connection.CELL_2G || navigator.connection.type == Connection.UNKNOWN) {
                                                            SearchValueService.addSuchbegriff(sucharray);
                                                            SearchValueService.setSerial(result.text);
                                                            RegisterDeviceService.setSerial(result.text);
                                                            SearchValueService.setSearchValue(result.text);
                                                            $state.go("app.search");
                                                        } else {
                                                            $state.go("app.scanned");
                                                        }
                                                    }
                                                })

                                        }
                           }
                        ]
                            });
                            myPopup.then(function (res) {
                                console.log('Tapped!', res);
                            });
                            $timeout(function () {
                                myPopup.close(); //close the popup after 3 seconds for some reason
                            }, 10000);



                        } else {
                            SearchValueService.setArticleNo("");
                            var today = new Date();
                            // alert(today);
                            var dd = today.getDate();
                            var mm = today.getMonth() + 1; //January is 0!
                            var yyyy = today.getFullYear();

                            if (dd < 10) {
                                dd = '0' + dd
                            }

                            if (mm < 10) {
                                mm = '0' + mm
                            }
                            var minute = today.getMinutes();
                            var hour = today.getHours();
                            if (minute < 10) {
                                minute = '0' + minute
                            }
                            if (hour < 10) {
                                hour = '0' + hour
                            }
                            today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;
                            var sucharray = [{
                                    Bezeichnung: result.text,
                                    Datum: today
                     }
                     ];
                            SearchValueService.addSuchbegriff(sucharray);
                            SearchValueService.setSerial(result.text);
                            RegisterDeviceService.setSerial(result.text);


                            SearchValueService.setSearchValue(result.text);
                            $state.go("app.search");

                        }



                    }
                });
        } else {

            cloudSky.zBar.scan({
                    cancelBtn: SearchValueService.getBackTranslation(window.localStorage['applang'])
                },
                function (result) {
                    // Set the scanned value in the service for later useage

                    if (result.indexOf("-") >= 0) {

                        var today = new Date();
                        // alert(today);
                        var dd = today.getDate();
                        var mm = today.getMonth() + 1; //January is 0!
                        var yyyy = today.getFullYear();

                        if (dd < 10) {
                            dd = '0' + dd
                        }

                        if (mm < 10) {
                            mm = '0' + mm
                        }
                        var minute = today.getMinutes();
                        var hour = today.getHours();
                        if (minute < 10) {
                            minute = '0' + minute
                        }
                        if (hour < 10) {
                            hour = '0' + hour
                        }
                        today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;
                        var sucharray = [{
                                Bezeichnung: result,
                                Datum: today
                     }
                     ];
                        SearchValueService.addSuchbegriff(sucharray);


                        SearchValueService.setArticleNo(result);

                        $ionicLoading.hide();

                        var myPopup = $ionicPopup.show({
                            title: '',
                            template: "{{ 'SCANNEDARTNR' | translate }}",
                            scope: $scope,
                            buttons: [
                                {
                                    text: "<i class='icon ion-close-circled'></i>",
                                    onTap: function (e) {
                                        if (navigator.connection.type == Connection.NONE || navigator.connection.type == Connection.CELL_2G || navigator.connection.type == Connection.UNKNOWN) {
                                            SearchValueService.addSuchbegriff(sucharray);
                                            SearchValueService.setSerial(result);
                                            RegisterDeviceService.setSerial(result);
                                            SearchValueService.setSearchValue(result);
                                            $state.go("app.search");
                                        } else {
                                            $state.go("app.scanned");
                                        }
                                        RegisterDeviceService.setSerial('');
                                    }
                                },
                                {
                                    text: "<i class='icon ion-checkmark'></i>",
                                    type: 'button-positive',
                                    onTap: function (e) {
                                        $ionicLoading.show({
                                            template: '<i class="icon ion-loading-d"></i>'
                                        });

                                        cloudSky.zBar.scan({
                                                cancelBtn: SearchValueService.getBackTranslation(window.localStorage['applang'])
                                            },
                                            function (result2) {
                                                // Set the scanned value in the service for later useage

                                                SearchValueService.setSerial(result2);
                                                RegisterDeviceService.setSerial(result2);
                                                var today = new Date();
                                                // alert(today);
                                                var dd = today.getDate();
                                                var mm = today.getMonth() + 1; //January is 0!
                                                var yyyy = today.getFullYear();

                                                if (dd < 10) {
                                                    dd = '0' + dd
                                                }

                                                if (mm < 10) {
                                                    mm = '0' + mm
                                                }
                                                var minute = today.getMinutes();
                                                var hour = today.getHours();
                                                if (minute < 10) {
                                                    minute = '0' + minute
                                                }
                                                if (hour < 10) {
                                                    hour = '0' + hour
                                                }
                                                today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;
                                                var sucharray = [{
                                                        Bezeichnung: result2.text,
                                                        Datum: today
                                          }
                                          ];
                                                SearchValueService.addSuchbegriff(sucharray);
                                                if (navigator.connection.type == Connection.NONE || navigator.connection.type == Connection.CELL_2G || navigator.connection.type == Connection.UNKNOWN) {
                                                    SearchValueService.addSuchbegriff(sucharray);
                                                    SearchValueService.setSerial(result);
                                                    RegisterDeviceService.setSerial(result);
                                                    SearchValueService.setSearchValue(result);
                                                    $state.go("app.search");
                                                } else {
                                                    $state.go("app.scanned");
                                                }

                                            },

                                            function (error) {
                                                $ionicLoading.hide();
                                                //if(ionic.Platform.is('ios')){
                                                //   window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
                                                //}
                                                console.log(error);

                                                if (navigator.connection.type == Connection.NONE || navigator.connection.type == Connection.CELL_2G || navigator.connection.type == Connection.UNKNOWN) {
                                                    SearchValueService.addSuchbegriff(sucharray);
                                                    SearchValueService.setSerial(result);
                                                    RegisterDeviceService.setSerial(result);
                                                    SearchValueService.setSearchValue(result);
                                                    $state.go("app.search");
                                                } else {
                                                    $state.go("app.scanned");
                                                }
                                            })

                                    }
                           }
                        ]
                        });
                        myPopup.then(function (res) {
                            console.log('Tapped!', res);
                        });
                        $timeout(function () {
                            myPopup.close(); //close the popup after 3 seconds for some reason
                        }, 10000);



                    } else {
                        SearchValueService.setArticleNo("");
                        var today = new Date();
                        // alert(today);
                        var dd = today.getDate();
                        var mm = today.getMonth() + 1; //January is 0!
                        var yyyy = today.getFullYear();

                        if (dd < 10) {
                            dd = '0' + dd
                        }

                        if (mm < 10) {
                            mm = '0' + mm
                        }
                        var minute = today.getMinutes();
                        var hour = today.getHours();
                        if (minute < 10) {
                            minute = '0' + minute
                        }
                        if (hour < 10) {
                            hour = '0' + hour
                        }
                        today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;
                        var sucharray = [{
                                Bezeichnung: result,
                                Datum: today
                     }
                     ];
                        SearchValueService.addSuchbegriff(sucharray);
                        SearchValueService.setSerial(result);
                        RegisterDeviceService.setSerial(result);


                        SearchValueService.setSearchValue(result);
                        $state.go("app.search");

                    }
                },
                function (error) {
                    $ionicLoading.hide();
                    //if(ionic.Platform.is('ios')){
                    //   window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
                    //}
                    console.log(error);
                });

        }
    }

    // Suche
    $scope.searchproduktedirect = function () {
        // Set the searchvalue in the service for later useage
        //alert(searchfor.nach);

        $ionicSideMenuDelegate.toggleLeft();
        var searchfor = (parent.document.getElementById("suche").value);
        RegisterDeviceService.setSerial('');

        if (searchfor.length > 2) {
            $ionicLoading.show({
                template: '<i class="icon ion-loading-d"></i>'
            });
            var today = new Date();
            // alert(today);
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }
            var minute = today.getMinutes();
            var hour = today.getHours();
            if (minute < 10) {
                minute = '0' + minute
            }
            if (hour < 10) {
                hour = '0' + hour
            }
            today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;
            var sucharray = [{
                    Bezeichnung: searchfor,
                    Datum: today
            }
            ];
            SearchValueService.addSuchbegriff(sucharray);
            SearchValueService.setSearchValue(searchfor);
            $state.go("app.search", {
                id: 1
            }, {
                location: false
            });

        }

    };

    // Suche
    $scope.searchprodukte = function (searchfor) {
        // Set the searchvalue in the service for later useage
        //alert(searchfor.nach);
        $ionicLoading.show({
            template: '<i class="icon ion-loading-d"></i>'
        });
        RegisterDeviceService.setSerial('');

        var today = new Date();
        // alert(today);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }
        var minute = today.getMinutes();
        var hour = today.getHours();
        if (minute < 10) {
            minute = '0' + minute
        }
        if (hour < 10) {
            hour = '0' + hour
        }
        today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;
        var sucharray = [{
                Bezeichnung: searchfor.nach,
                Datum: today
         }
         ];
        SearchValueService.addSuchbegriff(sucharray);
        SearchValueService.setSearchValue(searchfor.nach);
        $state.go("app.search", {
            id: 1
        }, {
            location: false
        });

    };

    // open Registrationform
    $scope.openreg = function () {
        window.open('http://www.duerrdental.com/', '_blank', 'location=no,EnableViewPortScale=yes');
    };

    // open demomode
    $scope.demomode = function () {

        UserLoginService.setUserName("guest");
        UserLoginService.setUserPassword("guest");
        $scope.loggedinuser = "guest";
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go("app.browse");
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function (loginData) {

        console.log('Doing login', $scope.loginData.password + $scope.loginData.password);
        if (navigator.connection.type == Connection.NONE) {
            $ionicLoading.hide();

            $ionicPopup.alert({
                title: "",
                content: "{{ 'NOINTERNET' | translate}}"
            });

        } else {
            //alert($scope.username);
            var username = $scope.loginData.username;
            var password = $scope.loginData.password;
            //alert(username);
            $scope.loggedinuser = username;

            console.log("user: " + username);
            $ionicLoading.show({
                template: '<i class="icon ion-loading-d"></i>'
            });
            var httpReq = new plugin.HttpRequest();
            var timer = $timeout(
                function () {

                    $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                        title: '',
                        content: "{{ 'NOINTERNET' | translate}}"
                    });
                },
                5000
            );

            httpReq.post("http://dlc.duerrdental.com/api/", {
                user: username,
                pw: password,
                app_id: "DD-ServiceAPP",
                action: "auth",
                debug: "0",
                app_lang: window.localStorage['applang']
            }, function (err, data) {
                //alert(data);
                $scope.loginresponsedata = JSON.parse(data);
                //$scope.articles = JSON.stringify(data);
                var statusresponse = $scope.loginresponsedata.status;
                console.log("response:", statusresponse);
                var loggedin = false;
                var returnstatus = "";
                //UserLoginService.setUserName("");
                //UserLoginService.setUserPassword("");
                if (angular.isDefined(statusresponse)) {
                    $timeout.cancel(timer);

                    timer.then(
                        function () {

                            console.log("LoginTimer resolved!", Date.now());

                        },
                        function () {

                            console.log("LoginTimer rejected!", Date.now());

                        }
                    );
                    console.log("Result: " + statusresponse);
                    if (angular.isDefined(statusresponse.USER_DATA_VALID)) {
                        loggedin = true;
                        $scope.loggedinuser = username;
                        var responsedata = $scope.loginresponsedata.data;
                        //alert(responsedata.first_name);
                        UserLoginService.setUserName(username);
                        UserLoginService.setUserPassword(password);
                        UserLoginService.setFirstname(responsedata.first_name);
                        UserLoginService.setLastname(responsedata.last_name);
                        UserLoginService.setUserID(responsedata.personal_id);
                        UserLoginService.setUsermail(responsedata.email);
                        UserLoginService.setUsercompany(responsedata.company);
                        UserLoginService.setCustomercounry(responsedata.country);

                        UserLoginService.setCustomerno(responsedata.customer_no);
                        UserLoginService.setRemember($scope.loginData.remember);

                        $scope.loggedinuser = username;
                        $ionicViewService.nextViewOptions({
                            disableBack: true
                        });
                        $state.go("app.browse", {}, {
                            location: 'replace'
                        });
                    } else if (angular.isDefined(statusresponse.USER_INVALID)) {
                        loggedin = false;
                        returnstatus = statusresponse.USER_INVALID;
                        var alertPopup = $ionicPopup.alert({
                            title: '',
                            template: "{{ 'USERNAMEERROR' | translate }}"
                        });
                    } else if (angular.isDefined(statusresponse.PW_INVALID)) {
                        loggedin = false;
                        returnstatus = statusresponse.PW_INVALID;
                        var alertPopup = $ionicPopup.alert({
                            title: '',
                            template: "{{ 'PWDERREROR' | translate }}"
                        });
                    } else {
                        //alert(UserLoginService.getUserName() + " - " + UserLoginService.getUserPassword());
                        if (UserLoginService.getUserName() != 'guest' && UserLoginService.getUserPassword() != 'guest') {
                            var alertPopup = $ionicPopup.alert({
                                title: '',
                                template: "{{ 'OTHERERROR' | translate }}"
                            });
                        }
                    }
                }

                $ionicLoading.hide();
                $scope.$on(
                    "$destroy",
                    function (event) {

                        $timeout.cancel(timer);

                    }
                );
                //$state.go("app.browse");
            });

        }
        
        $scope.loginData.password = "";
        $scope.loginData.username = "";
    };



    // open Registration Form
    $scope.registeruser = function () {
        window.open("http://www.duerrdental.net/ihre-registrierung/", '_blank', 'location=yes,EnableViewPortScale=yes');
    };

    // open userdata Form
    $scope.forgotdata = function () {
        window.open("http://www.duerrdental.net/passwort-anfordern/?tx_felogin_pi1[forgot]=1", '_blank', 'location=yes,EnableViewPortScale=yes');
    };
})

// get last Search for home
.controller('getLastsearchCtrl', function (RegisterDeviceService, HistoryBackService, $ionicPopup, $scope, $http, $ionicLoading, $state, SearchValueService, $ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.canDragContent(true);

    HistoryBackService.setScannedLoaded("false");
    //alert(HistoryBackService.getScannedLoaded());

    var data = SearchValueService.getSearches();
    $scope.searches = data;

    // Suche
    $scope.searchprodukteclick = function (searchfor) {
        // Set the searchvalue in the service for later useage
        $ionicLoading.show();


        SearchValueService.setSearchValue(searchfor);
        RegisterDeviceService.setSerial('');

        $state.go("app.search");
    };

})

// Useless
.controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
        {
            title: 'Reggae',
            id: 1
        },
        {
            title: 'Chill',
            id: 2
        },
        {
            title: 'Dubstep',
            id: 3
        },
        {
            title: 'Indie',
            id: 4
        },
        {
            title: 'Rap',
            id: 5
        },
        {
            title: 'Cowbell',
            id: 6
        }
      ];
})

// Get single Article (Scan or direct select)
.controller('getRegdeviceCtrl', function ($ionicPopup, $state, $timeout, $scope, $http, $ionicLoading, RegisterDeviceService, SearchValueService, HistoryService, UserLoginService) {
    //$scope.getArticle =  function() {
    $scope.doctypesfilter = function (documents) {
        return documents.document_type == 'Gebrauchsanweisung' || documents.document_type == 'Installationsanleitung' || documents.document_type == 'Installations- und Konfigurationsanleitung' || documents.document_type == 'Handbuch' || documents.document_type == 'Wartungs- und Reparaturanleitung' || documents.document_type == 'Information' || documents.document_type == 'Kurzanleitung' || documents.document_type == 'Film' || documents.document_type == 'Prospekt' || documents.document_type == 'Sonstiges' || documents.document_type == 'Sicherheitsdatenblatt' || documents.document_type == 'Formular' || documents.document_type == 'Produktinformation' || documents.document_type == 'Service' || documents.document_type == 'Operating Instructions' || documents.document_type == 'Installation instructions' || documents.document_type == 'Installation and configuration guide' || documents.document_type == 'Manual' || documents.document_type == 'Maintenance and repair instructions' || documents.document_type == 'Information' || documents.document_type == 'Short introduction' || documents.document_type == 'Movie' || documents.document_type == 'Brochure' || documents.document_type == 'Other' || documents.document_type == 'Safety data sheet' || documents.document_type == 'Form' || documents.document_type == 'Product information' || documents.document_type == 'Service'

    };


    $ionicLoading.show({
        template: '<i class="icon ion-loading-d"></i>'
    });
    // Define Standard POST Parameter
    var httpReq = new plugin.HttpRequest();
    var timer = $timeout(
        function () {

            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
                title: 'Error',
                template: "{{ 'CHECKCONNECTION' | translate }} 3826"
            });
        },
        25000
    );
    var serialno = SearchValueService.getSerial();
    //alert(serialno);
    var articleno = SearchValueService.getArticleNo();
    $scope.surgery = SearchValueService.getSurgery();


    var username = UserLoginService.getUserName();
    var password = UserLoginService.getUserPassword();
    $scope.applanguage = window.localStorage['applang'];
    httpReq.post("http://dlc.duerrdental.com/api/", {
        user: username,
        pw: password,
        app_id: "DD-ServiceAPP",
        action: "product_search",
        debug: "0",
        app_lang: window.localStorage['applang'],
        lang_code: window.localStorage['applang'],
        article_nr: articleno
    }, function (err, data) {
        //alert(data);
        $scope.articles = JSON.parse(data);
        timer.then(
            function () {

                console.log("regTimer resolved!", Date.now());

            },
            function () {

                console.log("regTimer rejected!", Date.now());

            }
        );
        var today = new Date();
        // alert(today);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }
        var minute = today.getMinutes();
        var hour = today.getHours();
        if (minute < 10) {
            minute = '0' + minute
        }
        if (hour < 10) {
            hour = '0' + hour
        }
        today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;
        if (window.localStorage['applang'] == "de") {
            var artname = $scope.articles.data[0].article_name_de;
        } else {
            var artname = $scope.articles.data[0].article_name_en;

        }
        var image = $scope.articles.data[0].product_image;
        if (image == "") {
            //alert($scope.articles.data[d].product_image);
            image = "./img/ico/dummybild.png";
        }
        RegisterDeviceService.setArtno($scope.articles.data[0].article_nr);

        RegisterDeviceService.setArtname(artname);

        var salesgroup = $scope.articles.data[0].sales_group;
        SearchValueService.setSalesGroup(salesgroup);
        //HistoryService.addArticle(artname, image, searchvalue, today,salesgroup);
        $ionicLoading.hide();


        $timeout.cancel(timer);


        //$scope.articles = JSON.stringify(data);
    });

    // open Docs
    $scope.getdocuments = function (doctype) {
        SearchValueService.setDoctype(doctype);
        $state.go("app.dokumente");
    };
    //};

    // open Registration
    $scope.registerdevice = function () {

        $state.go("app.registerdevice");

    };

    // open service
    $scope.service = function () {

        $state.go("app.service");

    };





})

// Get single Article (Scan or direct select)
.controller('getArticleByScanCtrl', function ($ionicViewService, HistoryBackService, $location, $ionicPopup, $state, $timeout, $scope, $http, $ionicLoading, RegisterDeviceService, SearchValueService, HistoryService, UserLoginService) {
    //$scope.getArticle =  function() {
    var loaded = HistoryBackService.getScannedLoaded();

    $scope.doctypesfilter = function (documents) {

        var document_type_EN = SearchValueService.getDocumentTypeEN(documents.document_type);

        return document_type_EN == 'Produktinformation' || document_type_EN == 'Service' || document_type_EN == 'Operating Instructions' || document_type_EN == 'Installation instructions' || document_type_EN == 'Installation and configuration guide' || document_type_EN == 'Manual' || document_type_EN == 'Maintenance and repair instructions' || document_type_EN == 'Information' || document_type_EN == 'Short introduction' || document_type_EN == 'Movie' || document_type_EN == 'Brochure' || document_type_EN == 'Other' || document_type_EN == 'Safety data sheet' || document_type_EN == 'Form' || document_type_EN == 'Product information' || document_type_EN == 'Service'

        /*return documents.document_type == 'Gebrauchsanweisung' || documents.document_type == 'Installationsanleitung' || documents.document_type == 'Installations- und Konfigurationsanleitung' || documents.document_type == 'Handbuch' || documents.document_type == 'Wartungs- und Reparaturanleitung' || documents.document_type == 'Information' || documents.document_type == 'Kurzanleitung' || documents.document_type == 'Film' || documents.document_type == 'Prospekt' || documents.document_type == 'Sonstiges' || documents.document_type == 'Sicherheitsdatenblatt' || documents.document_type == 'Formular' || documents.document_type == 'Produktinformation' || documents.document_type == 'Service' || documents.document_type == 'Operating Instructions' || documents.document_type == 'Installation instructions' || documents.document_type == 'Installation and configuration guide' || documents.document_type == 'Manual' || documents.document_type == 'Maintenance and repair instructions' || documents.document_type == 'Information' || documents.document_type == 'Short introduction' || documents.document_type == 'Movie' || documents.document_type == 'Brochure' || documents.document_type == 'Other' || documents.document_type == 'Safety data sheet' || documents.document_type == 'Form' || documents.document_type == 'Product information' || documents.document_type == 'Service'
         */
    };

    $scope.getDocumentTypeEN = function (document_type) {
        return SearchValueService.getDocumentTypeEN(document_type);
    };
    $scope.applanguage = window.localStorage['applang'];

    if (loaded == "true") {
        var data = HistoryBackService.getScannedScope();
        console.log();
        console.log("DATA: " + data);
        console.log();
        $scope.articles = JSON.parse(data);

        var today = new Date();
        // alert(today);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }
        var minute = today.getMinutes();
        var hour = today.getHours();
        if (minute < 10) {
            minute = '0' + minute
        }
        if (hour < 10) {
            hour = '0' + hour
        }
        today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;

        if (window.localStorage['applang'] == "de") {
            var artname = $scope.articles.data[0].article_name_de;
        } else {
            var artname = $scope.articles.data[0].article_name_en;
        } //HistoryBackService.setScannedLoaded("true");

        if ($scope.articles.data[0].product_image == "") {
            //alert($scope.articles.data[d].product_image);
            $scope.articles.data[0].product_image = "./img/ico/dummybild.png";
        }
        var image = $scope.articles.data[0].product_image;

        RegisterDeviceService.setArtno($scope.articles.data[0].article_nr);
        SearchValueService.setArticleNo($scope.articles.data[0].article_nr);

        RegisterDeviceService.setArtname(artname);
        RegisterDeviceService.setSerial(serial_no);

        var registereddevices = RegisterDeviceService.getArticles();
        // console.log("REG: " + registereddevices[0]);
        // console.log("REG: " + registereddevices[0].serial);


        var salesgroup = $scope.articles.data[0].sales_group;
        SearchValueService.setSalesGroup(salesgroup);

        //alert("NAME:" + artname + " - image:" +image +" - serial:" +serial_no + " - salesg" + salesgroup + "artno:" + articleno);

        //HistoryService.addArticle(artname, image, serial_no, today,salesgroup, articleno);
        $ionicLoading.hide();

        $scope.registered = false;
        if (angular.isUndefined(registereddevices)) {} else {
            for (var d = 0, len = registereddevices.length; d < len; d += 1) {
                if (registereddevices[d][0].serial == $scope.articles.data[0].article_nr) {

                    $scope.registered = true;
                    $scope.praxis = registereddevices[d][0].Praxis;
                }
            }
        }
    } else {
        if (navigator.connection.type == Connection.NONE || navigator.connection.type == Connection.CELL_2G || navigator.connection.type == Connection.UNKNOWN) {
            $ionicLoading.hide();
            $ionicPopup.alert({
                title: "ERROR",
                template: "{{ 'CHECKCONNECTION' | translate }}"
            });

        } else {
            $ionicLoading.show({
                template: '<i class="icon ion-loading-d"></i>'
            });

            // Define Standard POST Parameter
            var httpReq = new plugin.HttpRequest();
            var timer = $timeout(
                function () {

                    $ionicLoading.hide();
                    /*var alertPopup = $ionicPopup.alert({
                        title: 'Error',

                        template: "{{ 'CHECKCONNECTION' | translate }}"
                    });*/
                },
                25000
            );
            var articleno = SearchValueService.getArticleNo();
            $scope.applanguage = window.localStorage['applang'];


            var serial_no = RegisterDeviceService.getSerial();
            $scope.serial_no = serial_no;
            //alert($scope.serial_no);
            var searchvalue = SearchValueService.getSearchValue();
            //alert("artno:" + articleno + " serial:" + serial_no + " svalue:" + searchvalue);
            //SearchValueService.setSearchValue("");
            var username = UserLoginService.getUserName();
            var password = UserLoginService.getUserPassword();

            //kicasta added
            var applang = window.localStorage['applang'];
            var langCode = window.localStorage['applang'];
            if (langCode != 'en') {
                langCode += ',en';
            }
            //kicasta end

            httpReq.post("http://dlc.duerrdental.com/api/", {
                user: username,
                pw: password,
                app_id: "DD-ServiceAPP",
                action: "product_search",
                debug: "0",
                app_lang: window.localStorage['applang'],
                lang_code: langCode,
                article_nr: articleno,
                serial_no: serial_no
            }, function (err, data) {

                if (data.length < 250) {
                    $scope.articlecount = 0;
                } else {
                    //added kicasta 
                    console.log("PRODUCT load: " + data);
                    $scope.articles = JSON.parse(data);
                    var documents = $scope.articles.data[0].documents;

                    var filteredDocuments = [];
                    var applang = window.localStorage['applang'];

                    for (var i = 0; i < documents.length; i++) {

                            var currentID = SearchValueService.getDocumentTypeID(documents[i].document_type);
                            var matchFound = false;
                            for (var j = 0; j < documents.length; j++) {
                                if (currentID == SearchValueService.getDocumentTypeID(documents[j].document_type) && documents[i].lang_id != documents[j].lang_id) {
                                    matchFound = true;

                                    if (SearchValueService.getLangID(applang) == documents[j].lang_id) {
                                        documents[j].document_count = documents[i].document_count;
                                        documents.splice(i, 1);
                                    } else {
                                        documents[i].document_count = documents[j].document_count;
                                        documents.splice(j, 1);
                                    }
                                    break;

                                }
                            }

                            if (!matchFound && documents[i].lang_id != applang) {
                                documents[i].document_type = SearchValueService.getDocumentTypeTranslation(applang, documents[i].document_type);
                            }

                        }
                        $ionicLoading.hide();

                    console.log("Filtered Documents: " + JSON.stringify(filteredDocuments));
                    $scope.articles.data[0].documents = documents;
                    //end kicasta
                    HistoryBackService.setScannedScope(JSON.stringify($scope.articles));
                    timer.then(
                        function () {

                            console.log("scanTimer resolved!", Date.now());

                        },
                        function () {

                            console.log("scanTimer rejected!", Date.now());

                        }
                    );
                    var today = new Date();
                    // alert(today);
                    var dd = today.getDate();
                    var mm = today.getMonth() + 1; //January is 0!
                    var yyyy = today.getFullYear();

                    if (dd < 10) {
                        dd = '0' + dd
                    }

                    if (mm < 10) {
                        mm = '0' + mm
                    }
                    var minute = today.getMinutes();
                    var hour = today.getHours();
                    if (minute < 10) {
                        minute = '0' + minute
                    }
                    if (hour < 10) {
                        hour = '0' + hour
                    }
                    today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;
                    if (window.localStorage['applang'] == "de") {
                        var artname = $scope.articles.data[0].article_name_de;
                    } else {
                        var artname = $scope.articles.data[0].article_name_en;

                    }
                    HistoryBackService.setScannedLoaded("true");

                    if ($scope.articles.data[0].product_image == "") {
                        //alert($scope.articles.data[d].product_image);
                        $scope.articles.data[0].product_image = "./img/ico/dummybild.png";
                    }
                    var image = $scope.articles.data[0].product_image;

                    RegisterDeviceService.setArtno($scope.articles.data[0].article_nr);
                    SearchValueService.setArticleNo($scope.articles.data[0].article_nr);

                    RegisterDeviceService.setArtname(artname);
                    //RegisterDeviceService.setSerial(serial_no);

                    var registereddevices = RegisterDeviceService.getArticles();
                    // console.log("REG: " + registereddevices[0]);
                    // console.log("REG: " + registereddevices[0].serial);


                    var salesgroup = $scope.articles.data[0].sales_group;
                    SearchValueService.setSalesGroup(salesgroup);

                    //alert("NAME:" + artname + " - image:" +image +" - serial:" +serial_no + " - salesg" + salesgroup + "artno:" + articleno);

                    HistoryService.addArticle(artname, image, serial_no, today, salesgroup, articleno);
                    $ionicLoading.hide();

                    $timeout.cancel(timer);
                    $scope.registered = false;
                    if (angular.isUndefined(registereddevices)) {} else {
                        for (var d = 0, len = registereddevices.length; d < len; d += 1) {
                            if (registereddevices[d][0].serial == $scope.articles.data[0].article_nr) {

                                $scope.registered = true;
                                $scope.praxis = registereddevices[d][0].Praxis;
                            }
                        }
                    }
                    //$scope.articles = JSON.stringify(data);
                }
            });
        }
    }

    $scope.doRefresh = function () {

        if (navigator.connection.type == Connection.NONE || navigator.connection.type == Connection.CELL_2G || navigator.connection.type == Connection.UNKNOWN) {
            $ionicLoading.hide();

            $ionicPopup.alert({
                title: "ERROR",
                template: "{{ 'CHECKCONNECTION' | translate }}"
            });
            $scope.$broadcast('scroll.refreshComplete');

        } else {
            //  $ionicLoading.show({


            // Define Standard POST Parameter
            var httpReq = new plugin.HttpRequest();
            var timer = $timeout(
                function () {
                    $scope.$broadcast('scroll.refreshComplete');

                    $ionicLoading.hide();
                    /*var alertPopup = $ionicPopup.alert({
                        title: 'Error',

                        template: "{{ 'CHECKCONNECTION' | translate }}"
                    });*/
                },
                25000
            );
            var articleno = SearchValueService.getArticleNo();

            var serial_no = RegisterDeviceService.getSerial();
            var searchvalue = SearchValueService.getSearchValue();
            //alert("artno:" + articleno + " serial:" + serial_no + " svalue:" + searchvalue);
            //SearchValueService.setSearchValue("");
            var username = UserLoginService.getUserName();
            var password = UserLoginService.getUserPassword();

            //kicasta added
            var applang = window.localStorage['applang'];
            var langCode = window.localStorage['applang'];
            if (langCode != 'en') {
                langCode += ',en';
            }
            //kicasta end

            httpReq.post("http://dlc.duerrdental.com/api/", {
                user: username,
                pw: password,
                app_id: "DD-ServiceAPP",
                action: "product_search",
                debug: "0",
                app_lang: window.localStorage['applang'],
                lang_code: langCode,
                article_nr: articleno,
                serial_no: serial_no
            }, function (err, data) {
                //alert(data);

                if (data.length < 250) {
                    $scope.articlecount = 0;
                } else {
                    //added kicasta
                    console.log("PRODUCT reload: " + data);
                    $scope.articles = JSON.parse(data);
                    var documents = $scope.articles.data[0].documents;
                    var filteredDocuments = [];
                    var applang = window.localStorage['applang'];

                    for (var i = 0; i < documents.length; i++) {

                            var currentID = SearchValueService.getDocumentTypeID(documents[i].document_type);
                            var matchFound = false;
                            for (var j = 0; j < documents.length; j++) {
                                if (currentID == SearchValueService.getDocumentTypeID(documents[j].document_type) && documents[i].lang_id != documents[j].lang_id) {
                                    matchFound = true;

                                    if (SearchValueService.getLangID(applang) == documents[j].lang_id) {
                                        documents[j].document_count = documents[i].document_count;
                                        documents.splice(i, 1);
                                    } else {
                                        documents[i].document_count = documents[j].document_count;
                                        documents.splice(j, 1);
                                    }
                                    break;

                                }
                            }

                            if (!matchFound && documents[i].lang_id != applang) {
                                documents[i].document_type = SearchValueService.getDocumentTypeTranslation(applang, documents[i].document_type);
                            }

                        }
                        $ionicLoading.hide();

                    //alert(JSON.stringify(filteredDocuments));
                    $scope.articles.data[0].documents = documents;
                    //end kicasta
                    HistoryBackService.setScannedScope(JSON.stringify($scope.articles));
                    timer.then(
                        function () {

                            console.log("scanTimer resolved!", Date.now());

                        },
                        function () {

                            console.log("scanTimer rejected!", Date.now());

                        }
                    );
                    var today = new Date();
                    // alert(today);
                    var dd = today.getDate();
                    var mm = today.getMonth() + 1; //January is 0!
                    var yyyy = today.getFullYear();

                    if (dd < 10) {
                        dd = '0' + dd
                    }

                    if (mm < 10) {
                        mm = '0' + mm
                    }
                    var minute = today.getMinutes();
                    var hour = today.getHours();
                    if (minute < 10) {
                        minute = '0' + minute
                    }
                    if (hour < 10) {
                        hour = '0' + hour
                    }
                    today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;
                    if (window.localStorage['applang'] == "de") {
                        var artname = $scope.articles.data[0].article_name_de;
                    } else {
                        var artname = $scope.articles.data[0].article_name_en;

                    }
                    HistoryBackService.setScannedLoaded("true");

                    if ($scope.articles.data[0].product_image == "") {
                        //alert($scope.articles.data[d].product_image);
                        $scope.articles.data[0].product_image = "./img/ico/dummybild.png";
                    }
                    var image = $scope.articles.data[0].product_image;

                    RegisterDeviceService.setArtno($scope.articles.data[0].article_nr);
                    SearchValueService.setArticleNo($scope.articles.data[0].article_nr);

                    RegisterDeviceService.setArtname(artname);
                    // RegisterDeviceService.setSerial(serial_no);

                    var registereddevices = RegisterDeviceService.getArticles();
                    // console.log("REG: " + registereddevices[0]);
                    // console.log("REG: " + registereddevices[0].serial);


                    var salesgroup = $scope.articles.data[0].sales_group;
                    SearchValueService.setSalesGroup(salesgroup);

                    //alert("NAME:" + artname + " - image:" +image +" - serial:" +serial_no + " - salesg" + salesgroup + "artno:" + articleno);

                    
                    HistoryService.addArticle(artname, image, serial_no, today, salesgroup, articleno);
                    $ionicLoading.hide();

                    $timeout.cancel(timer);
                    $scope.registered = false;
                    if (angular.isUndefined(registereddevices)) {} else {
                        for (var d = 0, len = registereddevices.length; d < len; d += 1) {
                            if (registereddevices[d][0].serial == $scope.articles.data[0].article_nr) {

                                $scope.registered = true;
                                $scope.praxis = registereddevices[d][0].Praxis;
                            }
                        }
                    }
                    //$scope.articles = JSON.stringify(data);
                }
            });
            $scope.$broadcast('scroll.refreshComplete');

        } //Stop the ion-refresher from spinning
        $scope.apply();


    };


    // open Docs
    $scope.getdocuments = function (doctype) {
        SearchValueService.setDoctype(doctype);
        $state.go("app.dokumente", {
            id: 1
        }, {
            reload: false
        });
        //alert(doctype);
        //$location.path('/app/dokumente');

    };
    //};

    // open Registration
    $scope.registerdevice = function () {

        $state.go("app.registerdevice");

    };

    // open service
    $scope.service = function () {

        $state.go("app.service");

    };





})

// Get Article related Files
.controller('getArticleDocs', function ($ionicPopup, $timeout, $scope, $http, $ionicLoading, SearchValueService, UserLoginService, HistoryService, DownloadHistoryService) {
    //$scope.getArticle =  function() {
    $ionicLoading.show({
        template: '<i class="icon ion-loading-d"></i>'
    });
    var httpReq = new plugin.HttpRequest();
    console.log("init articledocstimer");

    var timer = $timeout(
        function () {

            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
                title: 'Error',

                template: "{{ 'CHECKCONNECTION' | translate }} 4465"
            });
        },
        10000
    );
    $scope.applanguage = window.localStorage['applang'];

    var salesgroup = SearchValueService.getSalesGroup();
    var documenttype = SearchValueService.getDoctype();
    var username = UserLoginService.getUserName();
    var password = UserLoginService.getUserPassword();
    console.log("getArtdocs running");


    // kicasta added

    if (applang == 'de') {
        httpReq.post("http://dlc.duerrdental.com/api/", {
            user: username,
            pw: password,
            app_id: "DD-ServiceAPP",
            action: "document_search",
            debug: "0",
            app_lang: 'de',
            lang_code: 'de',
            sales_group: salesgroup,
            document_type: SearchValueService.getDocumentTypeEN(documenttype)
        }, function (err, data) {
            $ionicLoading.show({
                template: '<i class="icon ion-loading-d"></i>'
            });

            $scope.articledocs = JSON.parse(data);;
            //alert("hhhhhhhhh2: " + $scope.articledocs);
            var articlecountstring = $scope.articledocs.status.DOCUMENT_SEARCH_RESULTS_FOUND.replace(/[^0-9\.]+/g, "");
            articlecountstring = articlecountstring.replace(".", "");
            $scope.articlecount = articlecountstring;
            //alert(articlecountstring);
            for (var d = 0, len = articlecountstring; d < len; d += 1) {
                $scope.articledocs.data[d].file_size = Math.round($scope.articledocs.data[d].file_size / 1000000 * 100) / 100;
                if ($scope.articledocs.data[d].file_size == 0) {
                    if ($scope.articledocs.data[d].dd_url.indexOf('.pdf') != -1) {
                        $scope.articledocs.data[d].file_preview = "./img/PDF.png"
                    } else {
                        $scope.articledocs.data[d].file_preview = "./img/ico/Doku_Film.png"

                    }
                }
            }

            //$scope.articledocs = JSON.parse(data);

            timer.then(
                function () {

                    console.log("articledocstimer resolved!", Date.now());

                },
                function () {

                    console.log("articledocstimer rejected!", Date.now());

                }
            );

            $timeout.cancel(timer);

            $ionicLoading.hide();

            //$scope.articles = JSON.stringify(data);
        });
    } else {
        var applang = window.localStorage['applang'];
        //Query EN
        httpReq.post("http://dlc.duerrdental.com/api/", {
            user: username,
            pw: password,
            app_id: "DD-ServiceAPP",
            action: "document_search",
            debug: "0",
            app_lang: 'en', //kicasta
            lang_code: 'en', //kicasta
            sales_group: salesgroup,
            document_type: SearchValueService.getDocumentTypeEN(documenttype)
        }, function (err, data) {
            $ionicLoading.show({
                template: '<i class="icon ion-loading-d"></i>'
            });
            enData = JSON.parse(data);
            if (applang == 'en') {
                $scope.articledocs = enData;
                //alert("hhhhhhhhh2: " + $scope.articledocs);
                var articlecountstring = $scope.articledocs.status.DOCUMENT_SEARCH_RESULTS_FOUND.replace(/[^0-9\.]+/g, "");
                articlecountstring = articlecountstring.replace(".", "");
                $scope.articlecount = articlecountstring;
                //alert(articlecountstring);
                for (var d = 0, len = articlecountstring; d < len; d += 1) {
                    $scope.articledocs.data[d].file_size = Math.round($scope.articledocs.data[d].file_size / 1000000 * 100) / 100;
                    if ($scope.articledocs.data[d].file_size == 0) {
                        if ($scope.articledocs.data[d].dd_url.indexOf('.pdf') != -1) {
                            $scope.articledocs.data[d].file_preview = "./img/PDF.png"
                        } else {
                            $scope.articledocs.data[d].file_preview = "./img/ico/Doku_Film.png"

                        }
                    }
                }
            }
            //$scope.articledocs = JSON.parse(data);

            timer.then(
                function () {

                    console.log("articledocstimer resolved!", Date.now());

                },
                function () {

                    console.log("articledocstimer rejected!", Date.now());

                }
            );

            $timeout.cancel(timer);

            $ionicLoading.hide();

            //$scope.articles = JSON.stringify(data);
        });

        if (applang != 'en') {
            //Query AppLang
            httpReq.post("http://dlc.duerrdental.com/api/", {
                user: username,
                pw: password,
                app_id: "DD-ServiceAPP",
                action: "document_search",
                debug: "0",
                app_lang: applang, //kicasta
                lang_code: applang, //kicasta
                sales_group: salesgroup,
                document_type: documenttype
            }, function (err, data) {
                $ionicLoading.show({
                    template: '<i class="icon ion-loading-d"></i>'
                });
                var applangData = JSON.parse(data);

                //alert("not english app");
                //console.log("EN Data: " + JSON.stringify(enData));
                //console.log();
                //console.log("App Lang Data: " + JSON.stringify(applangData));
                //$scope.articledocs = applangData;

                //console.log("enData Antes: " + JSON.stringify(enData.data));
                var toRemove = [];
                for (var i = 0; i < enData.data.length; i++) {
                    //alert("2821");
                    var currentID = enData.data[i].art_nr;
                    for (var j = 0; j < applangData.data.length; j++) {
                        if (currentID == applangData.data[j].art_nr) {
                            toRemove.push(enData.data[i]);
                            break;
                        }
                    }
                }
                for (var i = 0, len = toRemove.length; i < len; i++) {
                    for (var j = 0, enLen = enData.data.length; j < enLen; j++) {
                        if (toRemove[i].art_nr == enData.data[j].art_nr) {
                            enData.data.splice(j, 1);
                            break;
                        }
                    }
                }
                enData.data = enData.data.concat(applangData.data);
                $scope.articledocs = enData;


                //console.log();
                //console.log("Scope: " + JSON.stringify($scope.articledocs));

                /*var articlecountstring = $scope.articledocs.status.DOCUMENT_SEARCH_RESULTS_FOUND.replace(/[^0-9\.]+/g, "");
                articlecountstring = articlecountstring.replace(".", "");
                $scope.articlecount = articlecountstring;*/

                var articlecountstring = $scope.articledocs.data.length;

                //alert(articlecountstring);
                for (var d = 0, len = articlecountstring; d < len; d += 1) {
                    //alert($scope.articledocs.data[d].file_size + " - " + Math.round($scope.articledocs.data[d].file_size / 1000000 * 100));
                    $scope.articledocs.data[d].file_size = Math.round($scope.articledocs.data[d].file_size / 1000000 * 100) / 100;
                    if ($scope.articledocs.data[d].file_size == 0) {
                        if ($scope.articledocs.data[d].dd_url.indexOf('.pdf') != -1) {
                            $scope.articledocs.data[d].file_preview = "./img/PDF.png"
                        } else {
                            $scope.articledocs.data[d].file_preview = "./img/ico/Doku_Film.png"

                        }
                    }

                }

                timer.then(
                    function () {

                        console.log("articledocstimer resolved!", Date.now());

                    },
                    function () {

                        console.log("articledocstimer rejected!", Date.now());

                    }
                );

                $timeout.cancel(timer);

                $ionicLoading.hide();
                //$scope.articles = JSON.stringify(data);
            });

            //$ionicLoading.hide();

        }
    }

    $scope.contains = function (check) {

        var AllDownloads = DownloadHistoryService.getDownloads();
        if (angular.isUndefined(AllDownloads)) {
            return false;
        }
        for (var i = 0, len = AllDownloads.length; i < len; i += 1) {
            if (AllDownloads[i][0].artname == check) {
                return true
            };
        }

        return false;
    }


    $scope.getfilepath = function (check) {
        var AllDownloads = DownloadHistoryService.getDownloads();
        for (var i = 0, len = AllDownloads.length; i < len; i += 1) {
            if (AllDownloads[i][0].artname == check) {
                return AllDownloads[i][0].filepath;
            };
        }
        return false;
    }

    $scope.downloadfile = function (filepath, filetype, filename, artname, size, dd_url) {
        //addDownload(artname, filetype, filename, filetype, salesgroup, fileSystem.root.toURL()  + relativeFilePath, size, today);



        if ($scope.contains(artname)) {
            //alert(1);
            var filepath2 = $scope.getfilepath(artname);
            var devicePlatform = device.platform;
            if (devicePlatform == "Android") {

                window.plugins.fileOpener.open(filepath2);
            } else {
                window.open(filepath2, '_blank', 'location=no,EnableViewPortScale=yes');
            }


        } else
        if (filepath == "no-file") {
            if (dd_url.indexOf('.pdf') != -1) {
                filepath = dd_url;
                var relativeFilePath = filename + ".pdf"; // using an absolute path also does not work
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
                    var fileTransfer = new FileTransfer();

                    var options;
                    options = new FileUploadOptions();
                    options.headers = {
                        Connection: "close"
                    }


                    var myPopup = $ionicPopup.show({
                        template: '<div class="skill_bar"><div class="skill_bar_progress skill_one" style="width:{{loadingindicator}}%;"></div></div><p name="loadingindicator" style="text-align: center;" ng-model="loadingindicator">{{loadingindicator}}%</p>',
                        title: 'Download ' + artname,
                        scope: $scope,
                        buttons: [
                            {
                                text: '<b></b>',
                                type: 'button button-icon icon ion-close-circled',
                                onTap: function (e) {
                                    fileTransfer.abort(win, fail);

                                    var win = function (r) {
                                        $ionicLoading.hide();

                                        console.log("Code = " + r.responseCode);
                                        console.log("Response = " + r.response);
                                        console.log("Sent = " + r.bytesSent);
                                    }

                                    var fail = function (error) {
                                        $ionicLoading.hide();

                                        //alert("An error has occurred: Code = " + error.code);
                                        console.log("upload error source " + error.source);

                                    }
                                }
                        }
                     ]
                    });
                    myPopup.then(function (res) {
                        console.log('Tapped!', res);
                    });



                    fileTransfer.onprogress = function (progressEvent) {
                        // A confirm dialog
                        if (progressEvent.lengthComputable) {
                            var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
                            $scope.loadingindicator = perc;
                            //$scope.loadingindicator2 = perc + "% ...";
                            //alert(perc);

                            $scope.$apply();
                            if (perc == 100) {
                                myPopup.close();
                            };
                            //$scope.loadingindicator = perc + "% ...";


                        }
                    };
                    $scope.abortdl = function () {
                        fileTransfer.abort(win, fail);

                        var win = function (r) {
                            $ionicLoading.hide();

                            console.log("Code = " + r.responseCode);
                            console.log("Response = " + r.response);
                            console.log("Sent = " + r.bytesSent);
                        }

                        var fail = function (error) {
                            $ionicLoading.hide();

                            //alert("An error has occurred: Code = " + error.code);
                            console.log("upload error source " + error.source);

                        }
                    }

                    //options.chunkedMode = false;
                    fileTransfer.download(
                        filepath,

                        // The correct path!
                        fileSystem.root.toURL() + '/' + relativeFilePath,

                        function (entry) {
                            $ionicLoading.hide();
                            var salesgroup = SearchValueService.getSalesGroup();
                            //alert("artname:" + artname + " filetype:" +  filetype + " filename:" + filename + " filetype:" + filetype + " salesg:" + salesgroup + " filepath" +filepath);
                            var today = new Date();
                            // alert(today);
                            var dd = today.getDate();
                            var mm = today.getMonth() + 1; //January is 0!
                            var yyyy = today.getFullYear();

                            if (dd < 10) {
                                dd = '0' + dd
                            }
                            if (mm < 10) {
                                mm = '0' + mm
                            }

                            var minute = today.getMinutes();
                            var hour = today.getHours();
                            if (minute < 10) {
                                minute = '0' + minute
                            }
                            if (hour < 10) {
                                hour = '0' + hour
                            }
                            today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;
                            if (filetype == "") {
                                if (relativeFilePath.indexOf('.pdf') != -1) {
                                    filetype = "PDF";
                                } else {
                                    filetype = "FILM";

                                }

                            }
                            //alert(filetype);

                            DownloadHistoryService.addDownload(artname, filetype, filename, filetype, salesgroup, fileSystem.root.toURL() + relativeFilePath, size, today);


                            var devicePlatform = device.platform;
                            if (devicePlatform == "Android") {
                                //window.open(fileSystem.root.toURL() + '/' + relativeFilePath, '_blank', 'location=no,EnableViewPortScale=yes');

                                window.plugins.fileOpener.open(fileSystem.root.toURL() + '/' + relativeFilePath);
                            } else {
                                window.open(fileSystem.root.toURL() + '/' + relativeFilePath, '_blank', 'location=no,EnableViewPortScale=yes');
                            }
                            //window.open(fileSystem.root.toURL() + '/' + relativeFilePath, '_blank', 'location=no,EnableViewPortScale=yes');
                        },
                        function (error) {
                            $ionicLoading.hide();
                            if (error.code == 4) {} else {
                                $ionicPopup.alert({
                                    title: "Error",
                                    content: "Code = " + error.code + " http:" + error.http_status
                                })
                            }

                        }, true, options
                    );
                });

            } else {
                filepath = encodeURI(dd_url);
                window.open(filepath, '_blank', 'location=no,EnableViewPortScale=yes');
            }
        } else {
            var relativeFilePath = filename + "." + filetype; // using an absolute path also does not work
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
                var fileTransfer = new FileTransfer();

                var options;
                options = new FileUploadOptions();
                options.headers = {
                    Connection: "close"
                }



                // An elaborate, custom popup
                //window.open(fileSystem.root.toURL() + '/' + relativeFilePath, '_blank', 'location=no,EnableViewPortScale=yes');
                var myPopup = $ionicPopup.show({
                    template: '<div class="skill_bar"><div class="skill_bar_progress skill_one" style="width:{{loadingindicator}}%;"></div></div><p name="loadingindicator" style="text-align: center;" ng-model="loadingindicator">{{loadingindicator}}%</p>',
                    title: 'Download ' + artname,
                    scope: $scope,
                    buttons: [
                        {
                            text: '<b></b>',
                            type: 'button button-icon icon ion-close-circled',
                            onTap: function (e) {
                                fileTransfer.abort(win, fail);

                                var win = function (r) {
                                    //alert("canceled");
                                    $ionicLoading.hide();

                                    console.log("Code = " + r.responseCode);
                                    console.log("Response = " + r.response);
                                    console.log("Sent = " + r.bytesSent);
                                }

                                var fail = function (error) {
                                    $ionicLoading.hide();

                                    alert("An error has occurred: Code = " + error.code);
                                    console.log("upload error source " + error.source);

                                }
                            }
                     }
                  ]
                });
                myPopup.then(function (res) {
                    //alert("tapped");
                    myPopup.close();
                    console.log('Tapped!', res);
                });



                fileTransfer.onprogress = function (progressEvent) {
                    // A confirm dialog
                    if (progressEvent.lengthComputable) {
                        var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
                        $scope.loadingindicator = perc;
                        //$scope.loadingindicator2 = perc + "% ...";
                        //alert(perc);

                        $scope.$apply();
                        if (perc == 100) {
                            myPopup.close();
                        };
                        //$scope.loadingindicator = perc + "% ...";


                    }
                };


                $scope.abortdl = function () {
                    fileTransfer.abort(win, fail);

                    var win = function (r) {
                        $ionicLoading.hide();

                        console.log("Code = " + r.responseCode);
                        console.log("Response = " + r.response);
                        console.log("Sent = " + r.bytesSent);
                    }

                    var fail = function (error) {
                        $ionicLoading.hide();

                        alert("An error has occurred: Code = " + error.code);
                        console.log("upload error source " + error.source);

                    }
                }

                //options.chunkedMode = false;
                fileTransfer.download(
                    filepath,

                    // The correct path!
                    fileSystem.root.toURL() + '/' + relativeFilePath,

                    function (entry) {
                        $ionicLoading.hide();
                        var salesgroup = SearchValueService.getSalesGroup();
                        //alert("artname:" + artname + " filetype:" +  filetype + " filename:" + filename + " filetype:" + filetype + " salesg:" + salesgroup + " filepath" +filepath);
                        var today = new Date();
                        // alert(today);
                        var dd = today.getDate();
                        var mm = today.getMonth() + 1; //January is 0!
                        var yyyy = today.getFullYear();

                        if (dd < 10) {
                            dd = '0' + dd
                        }
                        if (mm < 10) {
                            mm = '0' + mm
                        }

                        var minute = today.getMinutes();
                        var hour = today.getHours();
                        if (minute < 10) {
                            minute = '0' + minute
                        }
                        if (hour < 10) {
                            hour = '0' + hour
                        }
                        today = dd + '.' + mm + '.' + yyyy + ' | ' + hour + ':' + minute;
                        DownloadHistoryService.addDownload(artname, filetype, filename, filetype, salesgroup, fileSystem.root.toURL() + relativeFilePath, size, today);


                        var devicePlatform = device.platform;
                        if (devicePlatform == "Android") {
                            //window.open(fileSystem.root.toURL() + '/' + relativeFilePath, '_blank', 'location=no,EnableViewPortScale=yes');

                            window.plugins.fileOpener.open(fileSystem.root.toURL() + '/' + relativeFilePath);
                        } else {
                            window.open(fileSystem.root.toURL() + '/' + relativeFilePath, '_blank', 'location=no,EnableViewPortScale=yes');
                        }
                        //window.open(fileSystem.root.toURL() + '/' + relativeFilePath, '_blank', 'location=no,EnableViewPortScale=yes');
                    },
                    function (error) {
                        $ionicLoading.hide();
                        if (error.code == 4) {} else {
                            $ionicPopup.alert({
                                title: "Error",
                                content: "Code = " + error.code + " http:" + error.http_status
                            })
                        }
                    }, true, options
                );
            });
        } {

            //


        }
        //window.open(filepath, '_sytem', 'location=yes,EnableViewPortScale=yes');





    };

    //};

})

// Logincontroller
.controller('loginCtrl', function ($ionicPopup, $scope, $http, $ionicLoading, UserLoginService) {
    //$scope.getArticle =  function() {
    $ionicLoading.show({
        template: '<i class="icon ion-loading-d"></i>'
    });
    var httpReq = new plugin.HttpRequest();

    var searchvalue = SearchValueService.getArticleNo();

    var username = UserLoginService.getUserName();
    var password = UserLoginService.getUserPassword();
    $scope.applanguage = window.localStorage['applang'];

    httpReq.post("http://dlc.duerrdental.com/api/", {
        user: username,
        pw: password,
        app_id: "DD-ServiceAPP",
        action: "document_search",
        debug: "0",
        app_lang: window.localStorage['applang'],
        lang_code: window.localStorage['applang'],
        article_nr: searchvalue
    }, function (err, data) {
        //alert(data);
        $scope.articles = JSON.parse(data);
        $ionicLoading.hide();
        //$scope.articles = JSON.stringify(data);
    });

    //};

})

// Get articles by search
.controller('getArticleBySearchCtrl', function (JsonService, xmlParser, $ionicViewService, HistoryBackService, $ionicPopup, $scope, $timeout, $http, $ionicLoading, SearchValueService, $state, UserLoginService, RegisterDeviceService) {
    $ionicLoading.show();

    HistoryBackService.setScannedLoaded("false");

    $scope.doRefresh = function () {
        if (navigator.connection.type == Connection.NONE || navigator.connection.type == Connection.CELL_2G || navigator.connection.type == Connection.UNKNOWN) {
            //alert("off");
            $ionicLoading.show();

            $scope.isoffline = true;

            var full_json = JsonService.getJson();
            $scope.articles = full_json;
            $scope.offlinesearchvalue = SearchValueService.getSearchValue();
            $ionicLoading.hide();

            //alert("2." + full_json.Row[0].ArtNr);
            $scope.$broadcast('scroll.refreshComplete');
            $scope.apply();


            angular.element(document).ready(function () {

            });




        } else {
            $scope.isoffline = false;
            var httpReq = new plugin.HttpRequest();
            var timer = $timeout(
                function () {
                    $scope.$broadcast('scroll.refreshComplete');

                    $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                        title: 'Error',

                        template: "{{ 'CHECKCONNECTION' | translate }} 5137"
                    });
                },
                25000
            );

            var searchvalue = SearchValueService.getSearchValue();
            var username = UserLoginService.getUserName();
            var password = UserLoginService.getUserPassword();
            //alert(searchvalue+"user:"+username+"pwd"+password);
            $scope.applanguage = window.localStorage['applang'];

            httpReq.post("http://dlc.duerrdental.com/api/", {
                user: username,
                pw: password,
                app_id: "DD-ServiceAPP",
                action: "product_search",
                debug: "0",
                app_lang: window.localStorage['applang'],
                article_name: searchvalue,
                serial_no: searchvalue,
                article_nr: searchvalue
            }, function (err, data) {
                if (data.length < 250) {
                    $scope.articlecount = 0;
                } else {
                    $scope.articles = JSON.parse(data);
                    var articlecountstring = $scope.articles.status.PRODUCT_SEARCH_RESULTS_FOUND.replace(/[^0-9\.]+/g, "");

                    articlecountstring = articlecountstring.replace(".", "");
                    $scope.articlecount = $scope.articles.data.length;


                    console.log(data);

                    var registereddevices = RegisterDeviceService.getArticles();
                    if (angular.isUndefined(registereddevices)) {} else {
                        for (var d = 0, len = $scope.articlecount; d < len; d += 1) {
                            console.log($scope.articles.data[d].article_nr);
                            if ($scope.articles.data[d].product_image.length < 5) {
                                //alert($scope.articles.data[d].product_image);
                                $scope.articles.data[d].product_image = "./img/ico/dummybild.png";
                            }
                            for (var i = 0, len2 = registereddevices.length; i < len2; i += 1) {
                                if (registereddevices[i][0].serial === $scope.articles.data[d].article_nr) {
                                    $scope.articles.data[d].registered = true;
                                    $scope.articles.data[d].praxis = registereddevices[i][0].Praxis;
                                }
                            }

                        }
                    }



                }
                timer.then(
                    function () {

                        console.log("searchTimer resolved!", Date.now());

                    },
                    function () {

                        console.log("searchTimer rejected!", Date.now());

                    }
                );

                $timeout.cancel(timer);

                $ionicLoading.hide();
                $scope.$broadcast('scroll.refreshComplete');

            }); //Stop the ion-refresher from spinning
            $scope.apply();
        }
    };


    if (navigator.connection.type == Connection.NONE || navigator.connection.type == Connection.CELL_2G || navigator.connection.type == Connection.UNKNOWN) {
        //alert("off");
        $scope.isoffline = true;
        $ionicLoading.show();

        angular.element(document).ready(function () {

            $ionicLoading.show();

            var full_json = JsonService.getJson();
            $scope.articles = full_json;
            $scope.offlinesearchvalue = SearchValueService.getSearchValue();
            var jsonstring = JSON.stringify(full_json);

            //alert(jsonstring);
            if (jsonstring.search(new RegExp($scope.offlinesearchvalue, "i")) == -1) {

                $scope.isoffline = false;

                $ionicLoading.show({
                    template: '<i class="icon ion-loading-d"></i>'
                });
                // Define Standard POST Parameter
                var httpReq = new plugin.HttpRequest();
                var timer = $timeout(
                    function () {

                        $ionicLoading.hide();
                        var alertPopup = $ionicPopup.alert({
                            title: 'Error',

                            template: "{{ 'CHECKCONNECTION' | translate }} 5248"
                        });
                    },
                    15000
                );
                $scope.applanguage = window.localStorage['applang'];

                var searchvalue = SearchValueService.getSearchValue();
                var username = UserLoginService.getUserName();
                var password = UserLoginService.getUserPassword();
                httpReq.post("http://dlc.duerrdental.com/api/", {
                    user: username,
                    pw: password,
                    app_id: "DD-ServiceAPP",
                    action: "product_search",
                    debug: "0",
                    app_lang: window.localStorage['applang'],
                    article_name: searchvalue,
                    serial_no: searchvalue,
                    article_nr: searchvalue
                }, function (err, data) {

                    if (data.length < 250) {
                        $scope.articlecount = 0;
                    } else {
                        $scope.articles = JSON.parse(data);
                        var articlecountstring = $scope.articles.status.PRODUCT_SEARCH_RESULTS_FOUND.replace(/[^0-9\.]+/g, "");
                        articlecountstring = articlecountstring.replace(".", "");
                        //$scope.articlecount = articlecountstring;
                        $scope.articlecount = $scope.articles.data.length;
                        var registereddevices = RegisterDeviceService.getArticles();
                        if (angular.isUndefined(registereddevices)) {} else {
                            for (var d = 0, len = $scope.articlecount; d < len; d += 1) {
                                console.log($scope.articles.data[d].article_nr);
                                if ($scope.articles.data[d].product_image.length < 5) {
                                    //alert($scope.articles.data[d].product_image);
                                    $scope.articles.data[d].product_image = "./img/ico/dummybild.png";
                                }
                                for (var i = 0, len2 = registereddevices.length; i < len2; i += 1) {
                                    if (registereddevices[i][0].serial === $scope.articles.data[d].article_nr) {
                                        $scope.articles.data[d].registered = true;
                                        $scope.articles.data[d].praxis = registereddevices[i][0].Praxis;
                                    }
                                }

                            }
                        }

                    }
                    timer.then(
                        function () {

                            console.log("searchTimer resolved!", Date.now());

                        },
                        function () {

                            console.log("searchTimer rejected!", Date.now());

                        }
                    );

                    $timeout.cancel(timer);

                    $ionicLoading.hide();

                });
            }


            $ionicLoading.hide();

            //alert("2." + full_json.Row[0].ArtNr);



        });



    } else {
        $scope.isoffline = false;

        $ionicLoading.show({
            template: '<i class="icon ion-loading-d"></i>'
        });
        // Define Standard POST Parameter
        var httpReq = new plugin.HttpRequest();
        var timer = $timeout(
            function () {

                $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                    title: 'Error',

                    template: "{{ 'CHECKCONNECTION' | translate }} 5342"
                });
            },
            25000
        );
        $scope.applanguage = window.localStorage['applang'];

        var searchvalue = SearchValueService.getSearchValue();
        var username = UserLoginService.getUserName();
        var password = UserLoginService.getUserPassword();
        httpReq.post("http://dlc.duerrdental.com/api/", {
            user: username,
            pw: password,
            app_id: "DD-ServiceAPP",
            action: "product_search",
            debug: "0",
            app_lang: window.localStorage['applang'],
            article_name: searchvalue,
            serial_no: searchvalue,
            article_nr: searchvalue
        }, function (err, data) {

            if (data.length < 250) {
                $scope.articlecount = 0;
            } else {
                $scope.articles = JSON.parse(data);
                var articlecountstring = $scope.articles.status.PRODUCT_SEARCH_RESULTS_FOUND.replace(/[^0-9\.]+/g, "");
                articlecountstring = articlecountstring.replace(".", "");
                //$scope.articlecount = articlecountstring;
                $scope.articlecount = $scope.articles.data.length;
                var registereddevices = RegisterDeviceService.getArticles();
                if (angular.isUndefined(registereddevices)) {} else {
                    for (var d = 0, len = $scope.articlecount; d < len; d += 1) {
                        console.log($scope.articles.data[d].article_nr);
                        if ($scope.articles.data[d].product_image.length < 5) {
                            //alert($scope.articles.data[d].product_image);
                            $scope.articles.data[d].product_image = "./img/ico/dummybild.png";
                        }
                        for (var i = 0, len2 = registereddevices.length; i < len2; i += 1) {
                            if (registereddevices[i][0].serial === $scope.articles.data[d].article_nr) {
                                $scope.articles.data[d].registered = true;
                                $scope.articles.data[d].praxis = registereddevices[i][0].Praxis;
                            }
                        }

                    }
                }

            }
            timer.then(
                function () {

                    console.log("searchTimer resolved!", Date.now());

                },
                function () {

                    console.log("searchTimer rejected!", Date.now());

                }
            );

            $timeout.cancel(timer);

            $ionicLoading.hide();

        });
    }
    // open opendetails of Device
    $scope.opendetails = function (artno, salesgroup) {
        // Set the selected value in the service for later useage
        SearchValueService.setArticleNo(artno);
        SearchValueService.setSalesGroup(salesgroup);
        SearchValueService.setSerial("");

        SearchValueService.setSurgery("");

        $state.go("app.scanned");
    };

})

// Historycontroller
.controller('HistoryCtrl', function (HistoryBackService, $ionicPopup, $scope, $stateParams, HistoryService, SearchValueService, RegisterDeviceService, $state) {
    var myhistory = HistoryService.getArticles();
    $scope.articles = myhistory;
    $scope.applanguage = window.localStorage['applang'];
    HistoryBackService.setScannedLoaded("false");
    var articlecount = $scope.articles.length;
    var registereddevices = RegisterDeviceService.getArticles();
    if (angular.isUndefined(registereddevices)) {} else {
        
        for (var d = 0, len = articlecount; d < len; d += 1) {
            for (var i = 0, len2 = registereddevices.length; i < len2; i += 1) {
                if (registereddevices[i][0].articleno === $scope.articles[d][0].articleno) {
                    //alert("CHECK2 " +registereddevices[i][0].serial + " = " + $scope.articles[d][0].serial);

                    $scope.articles[d][0].registered = true;
                    $scope.articles[d][0].praxis = registereddevices[i][0].Praxis;
                }
            }

        }
    }
    // open opendetails of Device
    $scope.opendetails = function (artno, salesgroup) {
        //alert(artno);
        // Set the selected value in the service for later useage
        SearchValueService.setArticleNo(artno);
        //alert(artno);
        SearchValueService.setSerial("");
        SearchValueService.setSalesGroup(salesgroup);

        $state.go("app.scanned");
    };

})

// regctrl
.controller('GetregCtrl', function (HistoryBackService, $ionicPopup, $scope, $stateParams, RegisterDeviceService, SearchValueService, $state) {
    HistoryBackService.setScannedLoaded("false");

    var myhistory = RegisterDeviceService.getArticles();
    $scope.articles = myhistory;

    // open opendetails of Device
    $scope.opendetails = function (articleno, salesgroup, surgery, serialno) {
        // Set the selected value in the service for later useage
        SearchValueService.setArticleNo(articleno);
        SearchValueService.setSalesGroup(salesgroup);
        SearchValueService.setSurgery(surgery);
        SearchValueService.setSerial(serialno);
        //alert(serialno);

        SearchValueService.setSearchValue("");

        $state.go("app.regdevice");
    };
    // open service
    $scope.service = function () {

        $state.go("app.service");

    };

})

// DownloadHistorycontroller
.controller('DownloadHistoryCtrl', function (HistoryBackService, $ionicModal, $ionicPopup, $scope, $stateParams, DownloadHistoryService, SearchValueService, $state) {
    HistoryBackService.setScannedLoaded("false");

    var myhistory = DownloadHistoryService.getDownloads();
    $scope.downloads = myhistory;

    // open opendetails of Device
    $scope.openfile = function (filepath) {
        // Set the selected value in the service for later useage
        var devicePlatform = device.platform;
        if (devicePlatform == "Android") {

            window.plugins.fileOpener.open(filepath);
        } else {
            window.open(filepath, '_blank', 'location=no,EnableViewPortScale=yes');
        }
    };



    // Create the filter modal that we will use later
    $ionicModal.fromTemplateUrl('templates/filter_downloads.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the filter modal to close it
    $scope.closeFilter = function () {
        $scope.modal.hide();
    };

    // Triggered in the filter modal to apply and close it
    $scope.applyFilter = function () {
        $scope.modal.hide();
    };

    // Open the filter modal
    $scope.showFilter = function () {
        $scope.modal.show();
    };

})

// SettingsController
.controller('SettingsController', function ($cordovaEmailComposer, $ionicModal, $ionicViewService, HistoryBackService, HistoryService, $ionicPopup, $scope, $stateParams, SettingsService, $state, $window, $ionicLoading, SearchValueService, UserLoginService) {
    $scope.applanguage = SettingsService.getApplang();
    $ionicModal.fromTemplateUrl('templates/form.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal3 = modal;
    });

    $scope.validatesingle = function (item) {

        // Set selected value
        $scope.selectedvalue = item;
        SettingsService.setApplang(item);
        $scope.modal3.hide();
        //location.href = location.origin;
        $ionicLoading.show({
            template: '<i class="icon ion-loading-d"></i>'
        });

        location.reload();

        /*$state.go("app.home", {}, {
            location: 'replace'
        });*/

        // Execute callback function
        if (typeof $scope.callback == 'function') {
            $scope.callback($scope.selected);
        }
    }
    angular.element(document).ready(function () {
        HistoryBackService.setScannedLoaded("false");
        $scope.username = UserLoginService.getUserName();
        $scope.usercompany = UserLoginService.getUsercompany();

        $scope.options = [{
            name: "Dansk",
            id: "da"
        }, {
            name: "Deutsch",
            id: "de"
        }, {
            name: "English",
            id: "en"
         }, {
            name: "Español",
            id: "es"
        }, {
            name: "Français",
            id: "fr"
        }, {
            name: "Italiano",
            id: "it"
        }, {
            name: "Polski",
            id: "pl"
         }, {
            name: "Portugues",
            id: "pt"
        }, {
            name: "ру́сский",
            id: "ru"
        }, {
            name: "中文",
            id: "ch"
        }];
        $scope.options2 = [{
            name: "Dansk",
            id: "da"
        }, {
            name: "Deutsch",
            id: "de"
        }, {
            name: "English",
            id: "en"
         }, {
            name: "Español",
            id: "es"
        }, {
            name: "Français",
            id: "fr"
        }, {
            name: "Italiano",
            id: "it"
        }, {
            name: "Polski",
            id: "pl"
         }, {
            name: "Portugues",
            id: "pt"
        }];

        var settedapplang = SettingsService.getApplang();
        //var setteddoclang = SettingsService.getDoclang();
        // APPLANG:

        if (settedapplang + "" == "undefined") {
            $scope.selectedOption = $scope.options[2];
        }
        if (settedapplang == "en") {
            $scope.selectedOption = $scope.options[2];
        }
        if (settedapplang == "de") {
            $scope.selectedOption = $scope.options[1];
        }
        if (settedapplang == "da") {
            $scope.selectedOption = $scope.options[0];
        }
        if (settedapplang == "es") {
            $scope.selectedOption = $scope.options[3];
        }
        if (settedapplang == "fr") {
            $scope.selectedOption = $scope.options[4];
        }
        if (settedapplang == "it") {
            $scope.selectedOption = $scope.options[5];
        }
        if (settedapplang == "pl") {
            $scope.selectedOption = $scope.options[6];
        }
        if (settedapplang == "pt") {
            $scope.selectedOption = $scope.options[7];
        }
        if (settedapplang == "ru") {
            $scope.selectedOption = $scope.options[8];
        }
        if (settedapplang == "ch") {
            $scope.selectedOption = $scope.options[9];
        }
    });


    // DOCLANG:


    $scope.clearhistory = function () {
        // A confirm dialog
        var myPopup = $ionicPopup.show({
            template: "<p style='text-align: center;'>{{ 'CLEARHISTORY' | translate }}?</p>",
            scope: $scope,
            buttons: [
                {
                    text: '<i class="icon ion-close-circled"></i>'
                },
                {
                    text: '<i class="icon ion-checkmark"></i>',
                    type: 'button-positive',
                    onTap: function (e) {
                        HistoryService.clearHistory();
                    }
      }
    ]
        });
        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
    };

    $scope.logout = function () {
        var confirmPopup = $ionicPopup.show({
            title: "- " + $scope.username + " -",
            template: "<p style='text-align: center;'>{{ 'LOGOUT' | translate }}?</p>",
            scope: $scope,
            buttons: [
                {
                    text: '<i class="icon ion-close-circled"></i>'
                },
                {
                    text: '<i class="icon ion-checkmark"></i>',
                    type: 'button-positive',
                    onTap: function (e) {
                        console.log('You are sure');
                        UserLoginService.setUserName("");
                        UserLoginService.setUserPassword("");
                        UserLoginService.setFirstname("");
                        UserLoginService.setLastname("");
                        UserLoginService.setUserID("");
                        UserLoginService.setUsermail("");
                        UserLoginService.setUsercompany("");
                        UserLoginService.setCustomercounry("");

                        UserLoginService.setCustomerno("");
                        UserLoginService.setRemember(false);
                        $ionicViewService.nextViewOptions({
                            disableBack: true
                        });

                        $state.go("app.home", {}, {
                            reload: true,
                            location: 'replace'
                        });
                    }
      }
        ]
        });
    }

    $scope.showintroagain = function () {
        /*$ionicViewService.nextViewOptions({
            disableBack: true
        });*/
        $state.go("app.intro", {}, {
            location: 'replace'
        });
    }


    $scope.questions = function () {
        // A confirm dialog
        //alert(1);


        var email = {
            to: "service@duerr.de",
            subject: "Anfrage Software Service_App" + SearchValueService.getArticleNo(),
            body: "Praxis: " + $scope.surgery + "<br>" +
                "UserID: " + UserLoginService.getUserID() + "<br>" +
                "CustomerNr: " + UserLoginService.getCustomerno() + "<br>" +
                "Firma: " + UserLoginService.getUsercompany() + "<br>" +
                "Username: " + UserLoginService.getLastname() + UserLoginService.getFirstname() + "<br>",
            isHtml: true
        };

        $cordovaEmailComposer.open(email).then(null, function () {
            // user cancelled email
            var alertPopup = $ionicPopup.alert({
                title: '',
                template: "{{ 'SERVICESENT' | translate }}"
            });
            $window.history.back();
        });


    }

    $scope.showversion = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Dürr Service App',
            template: '2015 Version 0.13'
        });

    }

    $scope.updateapplang = function (selectedvalue1) {
        console.log("last value:" + selectedvalue1);

        if (selectedvalue1 == 'en') {
            SettingsService.setApplang('de');
        } else {
            SettingsService.setApplang('en');
        }

    }
    $scope.updatedoclang = function (selectedvalue1) {
        console.log("last value:" + selectedvalue1);
        if (selectedvalue1 == 'en') {
            SettingsService.setDoclang('de');
        } else {
            SettingsService.setDoclang('en');
        }

    }

})

// Register Device Controller
.controller('registerDeviceCtrl', function ($cordovaEmailComposer, $cordovaFlashlight, $ionicLoading, $ionicPopup, $scope, $stateParams, RegisterDeviceService, HistoryService, $window, UserLoginService, SearchValueService) {
    var lastarticle = HistoryService.getLastarticle();


    //alert(lastarticle[0].serial);
    $scope.scanserial = function () {
        //alert(2);
        $ionicLoading.show({
            template: '<i class="icon ion-loading-d"></i>'
        });


        if (ionic.Platform.isAndroid()) {
            /*$cordovaFlashlight.switchOn()
                .then(
                    function (success) { },
                    function (error) {
                        console.log(error); 
                    });*/
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    //$cordovaFlashlight.switchOff();
                    //alert("Result: " + result.text + "\n" +
                    //"Format: " + result.format + "\n" +
                    //"Cancelled: " + result.cancelled);

                    // Set the scanned value in the service for later useage

                    if (result.cancelled) {
                        $ionicLoading.hide();
                        //if(ionic.Platform.is('ios')){
                        //   window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
                        //}
                        console.log("Scanner cancelled");
                    } else {

                        if (result.text.indexOf("-") >= 0) {


                            $ionicLoading.hide();

                            var myPopup = $ionicPopup.show({
                                title: 'Artikelnummer gescannt',
                                template: 'Der gescannte Barcode beinhaltet wahrscheinlich nur die Artieklnr. Bitte die Seriennummer scannen.',
                                scope: $scope,
                                buttons: [
                                    {
                                        text: '<i class="icon ion-checkmark"></i>',
                                        onTap: function (e) {}
                           }
                        ]
                            });
                            myPopup.then(function (res) {
                                console.log('Tapped!', res);
                            });
                            $timeout(function () {
                                myPopup.close(); //close the popup after 3 seconds for some reason
                            }, 10000);



                        } else {
                            $scope.serialno = result.text;
                            $ionicLoading.hide();

                        }



                    }
                });
        } else {
            cloudSky.zBar.scan({
                    cancelBtn: SearchValueService.getBackTranslation(window.localStorage['applang'])
                },
                function (result) {
                    // Set the scanned value in the service for later useage
                    if (result.indexOf("-") >= 0) {


                        $ionicLoading.hide();

                        var myPopup = $ionicPopup.show({
                            title: 'Artikelnummer gescannt',
                            template: 'Der gescannte Barcode beinhaltet wahrscheinlich nur die Artieklnr. Bitte die Seriennummer scannen.',
                            scope: $scope,
                            buttons: [
                                {
                                    text: '<i class="icon ion-checkmark"></i>',
                                    onTap: function (e) {}
                           }
                        ]
                        });
                        myPopup.then(function (res) {
                            console.log('Tapped!', res);
                        });
                        $timeout(function () {
                            myPopup.close(); //close the popup after 3 seconds for some reason
                        }, 10000);



                    } else {
                        $scope.serialno = result;
                        $ionicLoading.hide();

                    }
                },
                function (error) {
                    $ionicLoading.hide();
                    //if(ionic.Platform.is('ios')){
                    //   window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
                    //}
                    console.log(error);
                });
        }
    };
    $scope.scanartno = function () {
        $ionicLoading.show({
            template: '<i class="icon ion-loading-d"></i>'
        });


        if (ionic.Platform.isAndroid()) {
            /*$cordovaFlashlight.switchOn()
                .then(
                    function (success) { },
                    function (error) {
                        console.log(error);
                    });*/
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    //$cordovaFlashlight.switchOff();
                    //alert("Result: " + result.text + "\n" +
                    //"Format: " + result.format + "\n" +
                    //"Cancelled: " + result.cancelled);

                    // Set the scanned value in the service for later useage

                    if (result.cancelled) {
                        $ionicLoading.hide();
                        //if(ionic.Platform.is('ios')){
                        //   window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
                        //}
                        console.log("Scanner cancelled");
                    } else {

                        $scope.modelno = result.text;
                        $ionicLoading.hide();





                    }
                });
        } else {
            
            cloudSky.zBar.scan({
                    cancelBtn: SearchValueService.getBackTranslation(window.localStorage['applang'])
                },
                function (result) {
                    $scope.modelno = result;
                    $ionicLoading.hide();
                },
                function (error) {
                    $ionicLoading.hide();
                    //if(ionic.Platform.is('ios')){
                    //   window.plugins.flashlight.switchOff(); // success/error callbacks may be passed
                    //}
                    console.log(error);
                });
        }

    };

    $scope.registerartnr = RegisterDeviceService.getArtno();
    $scope.registerartname = RegisterDeviceService.getArtname();
    $scope.registerserial = RegisterDeviceService.getSerial();



    angular.element(document).ready(function () {
        $scope.modelno = $scope.registerartnr;
        $scope.model = $scope.registerartname;
        $scope.nameofemployee = UserLoginService.getFirstname() + " " + UserLoginService.getLastname();
        //UserLoginService.getUserID();
        //$scope.mail = UserLoginService.getUsermail();
        //         $scope.surgery = UserLoginService.getUsercompany();
        $scope.location = UserLoginService.getCustomecountry();
        $scope.dentaldepot = UserLoginService.getUsercompany();
        $scope.serialno = $scope.registerserial;


    });
    $scope.registerformsubmit = function () {
        //alert($scope.surgery);

        var devicePlatform = device.platform;
//alert(JSON.stringify(lastarticle));
        if (devicePlatform == "Android") {
            //window.open(fileSystem.root.toURL() + '/' + relativeFilePath, '_blank', 'location=no,EnableViewPortScale=yes');

            RegisterDeviceService.addArticle(lastarticle[0].Bezeichnung, lastarticle[0].Bild, $scope.serialno, lastarticle[0].date, lastarticle[0].salesgroup, $scope.surgery, $scope.registerartnr);
            var alertPopup = $ionicPopup.alert({
                title: '',
                template: "{{ 'REGSENT' | translate }}"
            });
        } else {
            RegisterDeviceService.addArticle(lastarticle[0].Bezeichnung, lastarticle[0].Bild, $scope.serialno, lastarticle[0].date, lastarticle[0].salesgroup, $scope.surgery, $scope.registerartnr);
            var alertPopup = $ionicPopup.alert({
                title: '',
                template: "{{ 'REGSENT' | translate }}"
            });
        }
        
        console.log("scope", $scope);

        var email = {
            to: "registration@duerr.de",
            subject: "Produktregistrierung Service_App" + $scope.modelno,
            body: "Praxis: " + $scope.surgery + "<br>" +
                "Kontakt: " + $scope.contactperson + "<br>" +
                "Straße Nr: " + $scope.streetno + "<br>" +
                "PLZ Stadt: " + $scope.zipcity + "<br>" +
                "Land: " + $scope.country + "<br>" +
                "Tel: " + $scope.phone + "<br>" +
                "Mail: " + $scope.mail + "<br>" +
                "Dentaldepot: " + $scope.dentaldepot + "<br>" +
                "Ort: " + $scope.location + "<br>" +
                "Art: " + $scope.modelno + "<br>" +
                "Artname: " + $scope.model + "<br>" +
                "SN: " + $scope.serialno + "<br>" +
                "Installdat: " + $scope.installdate + "<br>" +
                "Mitarbeiter: " + $scope.nameofemployee + "<br>" +
                "UserID: " + UserLoginService.getUserID() + "<br>" +
                "Trainingdat: " + $scope.dateofproducttraining + "<br>",
            isHtml: true
        };

        $cordovaEmailComposer.open(email).then(null, function () {
            // user cancelled email
        });

        // Attachment Data

    }



})

// Register Device Controller
.controller('ServiceCtrl', function ($cordovaEmailComposer, $window, $ionicPopup, $scope, $stateParams, RegisterDeviceService, HistoryService, $cordovaCamera, SearchValueService, UserLoginService) {
    $scope.changePicture = function (index) {
        console.log("try pic " + index);
        var options = {
            quality: 75,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 400,
            targetHeight: 400,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function (imageData) {
            if (index == 1) {
                $scope.imgURI = imageData;
                //$scope.imgURI_mail = imageData;
            }
            if (index == 2) {
                $scope.imgURI2 = imageData;
            }
            if (index == 3) {
                $scope.imgURI3 = imageData;
            }
            if (index == 4) {
                $scope.imgURI4 = imageData;
            }
            if (index == 5) {
                $scope.imgURI5 = imageData;
            }


        }, function (err) {
            // An error occured. Show a message to the user
        });
    }

    $scope.serviceformsubmit = function () {

        $cordovaEmailComposer.isAvailable().then(function () {
            // is available
        }, function () {
            // not available
        });

        var email = {
            to: 'service@duerr.de',
            attachments: [
               $scope.imgURI,
               $scope.imgURI2,
               $scope.imgURI3,
               $scope.imgURI4,
               $scope.imgURI5
            ],
            subject: 'Anfrage Prio Service App ' + SearchValueService.getArticleNo(),
            body: "UserID: " + UserLoginService.getUserID() + "<br>" +
                "CustomerNr: " + UserLoginService.getCustomerno() + "<br>" +
                "Firma: " + UserLoginService.getUsercompany() + "<br>" +
                "Username: " + UserLoginService.getLastname() + UserLoginService.getFirstname() + "<br>" +
                "Anfragegrund: " + $scope.registerform.question + "<br>" +
                "Geräteartnr: " + SearchValueService.getArticleNo() + "<br>" +
                "GeräteSeriennr: " + SearchValueService.getSerial() + "<br>",
            isHtml: true
        };

        $cordovaEmailComposer.open(email).then(null, function () {
            // user cancelled email
        });
    }


})


// Enable and Disable Siedemenu
.controller('DragController', function ($scope, $stateParams, $ionicSideMenuDelegate, UserLoginService) {
    $ionicSideMenuDelegate.canDragContent(false);

});