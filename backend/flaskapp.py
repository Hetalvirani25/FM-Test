
from flask_cors import CORS, cross_origin
from flask import Flask, jsonify, request
import pymysql

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
# Database connection
def get_db_connection():
    return pymysql.connect(host='localhost',
                           user='root',
                           password='Hetal@3012',
                           db='shop',
                           cursorclass=pymysql.cursors.DictCursor)
@cross_origin()
@app.route('/product', methods=['GET'])
def products():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM products')
    products = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(products)

@app.route('/user', methods=['GET'])
def users():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users')
    products = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(products)


@app.route('/login', methods=['POST'])
def login():
    details = request.json
    username = details['username']
    password = details['password']
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
    user = cursor.fetchone()
    cursor.close()
    if user:
        return jsonify({'message': 'Logged in successfully'}), 200
    else:
        return jsonify({'message': 'Username or Password is incorrect'}), 401
    
@app.route('/signup', methods=['POST'])
def signup():
    details = request.json
    firstname = details['firstname']
    lastname = details['lastname']
    username = details['username']
    email = details['email']
    password = details['password']
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO Users(firstname, lastname, username, email, password) VALUES (%s, %s, %s, %s, %s)", (firstname, lastname, username, email, password))
    cursor.close()
    user = cursor.fetchone()
    if user:
        return jsonify({'message': 'User in successfully'}), 200
    else:
        return jsonify({'message': 'invalidate data is incorrect'}), 401
    
@app.route('/logout', methods=['POST'])
def logout():
    # Logic to invalidate the user's session or token
    return jsonify({'message': 'Logged out successfully'}), 200

@app.route('/profile', methods=['GET'])
def profile():
    # Authentication check
    # Replace 'user_id' with the actual method you use to identify the logged-in user
    username = request.args.get('username')
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT username, firstname, lastname, email FROM users WHERE username = %s", (username))
    user_data = cursor.fetchone()
    cursor.close()
    if user_data:
        return jsonify({
            'username': user_data[0],
            'firstname': user_data[1],
            'lastname': user_data[2],
            'email': user_data[3]
        })
    else:
        return jsonify({"error": "User not found"}), 404
    
@app.route('/api/user/change-password', methods=['POST'])
def change_password():
    # In a real application, validate the session or token to identify the user
    user = users.get('user1')
    data = request.json
    current_password = data.get('currentPassword')
    new_password = data.get('newPassword')

    if user and user['password'] == current_password:
        # Update password logic here, in a real application, securely hash the new password
        user['password'] = new_password
        return jsonify({'message': 'Password updated successfully'})
    return jsonify({'message': 'Invalid current password or user not found'}), 401

if __name__ == '__main__':
    app.run(debug=True)