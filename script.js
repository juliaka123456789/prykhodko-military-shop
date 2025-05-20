/* Загальні стилі */
body {
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
    color: #333;
}

/* Шапка */
header {
    background-color: #1c1c1c;
    color: white;
    padding: 20px;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 2em;
}

nav ul {
    list-style: none;
    padding: 0;
    margin-top: 10px;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: #ccc;
    text-decoration: none;
    font-weight: bold;
}

nav ul li a:hover {
    color: white;
}

/* Сітка товарів */
.product-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 40px 20px;
}

/* Картка товару */
.product-card {
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 260px;
    text-align: center;
    transition: transform 0.3s ease;
}

.product-card:hover {
    transform: scale(1.03);
}

.product-card img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}

.product-card h2 {
    font-size: 1.1em;
    margin: 10px 0;
}

.product-card p {
    font-size: 1.1em;
    margin: 10px 0;
    font-weight: bold;
}

button {
    background-color: #007b1e;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #005e17;
}

/* Підвал */
footer {
    background-color: #1c1c1c;
    color: white;
    text-align: center;
    padding: 30px 20px;
    margin-top: 30px;
}
