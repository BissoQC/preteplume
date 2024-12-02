# preteplume #

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bientôt en ligne</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            height: 100vh;
            background-image: url('keyboard.jpg');
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: white;
            text-align: center;
        }

        header {
            background-color: rgba(0, 0, 0, 0.8);
            padding: 1em 0;
            position: sticky;
            top: 0;
            width: 100%;
        }

        nav ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        nav ul li {
            display: inline;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-size: 1.2em;
            font-weight: bold;
            transition: color 0.3s;
        }

        nav ul li a:hover {
            color: #FFD700;
        }

        h1 {
            font-size: 3em;
            font-weight: bold;
            text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
        }

        p {
            font-size: 1.5em;
            font-weight: 300;
            text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.7);
        }

        footer {
            background-color: rgba(0, 0, 0, 0.8);
            padding: 1em 0;
            color: white;
            text-align: center;
            font-size: 0.9em;
        }

    </style>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#services">Mes services</a></li>
                <li><a href="#about">Qui est BissoQc</a></li>
                <li><a href="#examples">Exemples</a></li>
                <li><a href="#order">Commandez votre texte!</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <div>
            <h1>Bientôt en ligne</h1>
            <p>Nous travaillons actuellement sur votre site web !</p>
        </div>
    </main>

    <footer>
        &copy; 2024 - 2025 Tous droits réservés. Propriété de BissoQc.
    </footer>
</body>
</html>
