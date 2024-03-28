
import mysql.connector
from dotenv import load_dotenv
import os

load_dotenv()

MYSQL_HOST = os.getenv("MYSQL_HOST")
MYSQL_USER = os.getenv("MYSQL_USER")
MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD")
MYSQL_DB = os.getenv("MYSQL_DB")

def connect():
    return mysql.connector.connect(
        host=MYSQL_HOST,
        user=MYSQL_USER,
        password=MYSQL_PASSWORD,
        database=MYSQL_DB
    )

def initialize_db_profession():
    conn = connect()
    cursor = conn.cursor()
    query = """
       CREATE TABLE IF NOT EXISTS profession (
           id INT AUTO_INCREMENT PRIMARY KEY,
           nom VARCHAR(255)
       );
    """
    cursor.execute(query,multi=True)
    conn.close()

def initialize_db_domaine():
    conn = connect()
    cursor = conn.cursor()
    query = """
    CREATE TABLE IF NOT EXISTS domaine (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nom VARCHAR(255)
        );
    """
    cursor.execute(query)
    conn.close()

def initialize_db_sous_domaine():
    conn = connect()
    cursor = conn.cursor()
    query = """
    CREATE TABLE IF NOT EXISTS sous_domaine (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nom VARCHAR(255),
            domaine_id INT,
            FOREIGN KEY (domaine_id) REFERENCES domaine(id)
        );
    """
    cursor.execute(query)
    conn.close()

def initialize_db_competence():
    conn = connect()
    cursor = conn.cursor()
    query = """
    CREATE TABLE IF NOT EXISTS competence (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nom VARCHAR(255),
        domaine_id INT,
        FOREIGN KEY (domaine_id) REFERENCES domaine(id)
    );
    """
    cursor.execute(query)
    conn.close()

def initialize_db_entreprise():
    conn = connect()
    cursor = conn.cursor()
    query = """
    CREATE TABLE IF NOT EXISTS entreprise(
        id INT AUTO_INCREMENT PRIMARY KEY,
        nom VARCHAR(255),
        ville VARCHAR(255),
        code_postal VARCHAR(255)
    );
    """
    cursor.execute(query)
    conn.close()

def initialize_db_personne():
    conn = connect()
    cursor = conn.cursor()
    query = """
    CREATE TABLE IF NOT EXISTS personne (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nom VARCHAR(255),
        prenom VARCHAR(255),
        email VARCHAR(255),
        mdp VARCHAR(255),
        telephone VARCHAR(255),
        description_profil VARCHAR(255),
        profession_id INT,
        sous_domaine INT,
        entreprise INT,
        FOREIGN KEY (profession_id) REFERENCES profession(id),
        FOREIGN KEY (sous_domaine) REFERENCES sous_domaine(id),
        FOREIGN KEY (entreprise) REFERENCES entreprise(id)
    );
    """
    cursor.execute(query)
    conn.close()

def initialize_value_domaine():
    conn = connect()
    cursor = conn.cursor()
    query = """
    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Informatique') AS tmp
    WHERE NOT EXISTS (
       SELECT nom FROM domaine WHERE nom = 'Informatique'
    ) LIMIT 1;

    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Finance') AS tmp
    WHERE NOT EXISTS (
       SELECT nom FROM domaine WHERE nom = 'Finance'
    ) LIMIT 1;

    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Ingénierie') AS tmp
    WHERE NOT EXISTS (
       SELECT nom FROM domaine WHERE nom = 'Ingénierie'
    ) LIMIT 1;

    INSERT INTO domaine (nom)
    SELECT * FROM (SELECT 'Marketing') AS tmp
    WHERE NOT EXISTS (
       SELECT nom FROM domaine WHERE nom = 'Marketing'
    ) LIMIT 1;
    """
    generator = cursor.execute(query,multi=True)
    for query in generator:
        if query.with_rows:
            query.fetchall()
    conn.close()

def initialize_value_sous_domaine():
    conn = connect()
    cursor = conn.cursor()
    query = """
    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Développement Web', 1) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Développement Web' AND domaine_id = 1
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Sécurité des réseaux', 1) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Sécurité des réseaux' AND domaine_id = 1
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Analyse financière', 2) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Analyse financière' AND domaine_id = 2
    ) LIMIT 1;

    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Génie mécanique', 3) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Génie mécanique' AND domaine_id = 3
    ) LIMIT 1;
    INSERT INTO sous_domaine (nom, domaine_id)
    SELECT * FROM (SELECT 'Marketing digital', 4) AS tmp
    WHERE NOT EXISTS (
        SELECT nom FROM sous_domaine WHERE nom = 'Marketing digital' AND domaine_id = 4
    ) LIMIT 1;
    """
    generator = cursor.execute(query,multi=True)
    for query in generator:
        if query.with_rows:
            query.fetchall()
    conn.close()

def initialize_value_competence():
    conn = connect()
    cursor = conn.cursor()
    query = """
       INSERT INTO competence (nom, domaine_id)
       SELECT * FROM (SELECT 'HTML', 1) AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM competence WHERE nom = 'HTML' AND domaine_id = 1
       ) LIMIT 1;

       INSERT INTO competence (nom, domaine_id)
       SELECT * FROM (SELECT 'PHP', 1) AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM competence WHERE nom = 'PHP' AND domaine_id = 1
       ) LIMIT 1;

       INSERT INTO competence (nom, domaine_id)
       SELECT * FROM (SELECT 'Analyse financière avancée', 2) AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM competence WHERE nom = 'Analyse financière avancée' AND domaine_id = 2
       ) LIMIT 1;

       INSERT INTO competence (nom, domaine_id)
       SELECT * FROM (SELECT 'Conception de pièces mécaniques', 3) AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM competence WHERE nom = 'Conception de pièces mécaniques' AND domaine_id = 3
       ) LIMIT 1;

       INSERT INTO competence (nom, domaine_id)
       SELECT * FROM (SELECT 'Stratégie de contenu', 4) AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM competence WHERE nom = 'Stratégie de contenu' AND domaine_id = 4
       ) LIMIT 1;

    """
    generator = cursor.execute(query,multi=True)
    for query in generator:
        if query.with_rows:
            query.fetchall()
    conn.close()
    
def initialize_value_entreprise():
    conn = connect()
    cursor = conn.cursor()
    query = """
       INSERT INTO entreprise (nom, ville, code_postal)
       SELECT * FROM (SELECT 'Orange', 'Bordeaux', '33000') AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM entreprise WHERE nom = 'Orange'
       ) LIMIT 1;

        INSERT INTO entreprise (nom, ville, code_postal)
       SELECT * FROM (SELECT 'Capgemini', 'Merignac', '33281') AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM entreprise WHERE nom = 'Capgemini'
       ) LIMIT 1;

        INSERT INTO entreprise (nom, ville, code_postal)
       SELECT * FROM (SELECT 'Safran', 'Le Haillan', '33200') AS tmp
       WHERE NOT EXISTS (
           SELECT nom FROM entreprise WHERE nom = 'Safran'
       ) LIMIT 1;
    """
    generator = cursor.execute(query,multi=True)
    for query in generator:
        if query.with_rows:
            query.fetchall()
    conn.close()

def initialize_db():
    initialize_db_domaine()
    initialize_db_sous_domaine()
    initialize_db_competence()
    initialize_db_profession()
    initialize_db_entreprise()
    initialize_db_personne()
    initialize_value_domaine()
    initialize_value_sous_domaine()
    initialize_value_competence()
    initialize_value_entreprise()

# Inside database.py
# def create_user(name, age):
#     conn = connect()
#     cursor = conn.cursor()
#     query = "INSERT INTO users (name, age) VALUES (%s, %s)"
#     values = (name, age)
#     cursor.execute(query, values)
#     conn.commit()
#     conn.close()
#     return cursor.lastrowid

# ... [other CRUD functions]


