from app import app, db, Item

# Create the Flask application context
with app.app_context():
    # Perform database operations within the context
    item1 = Item(name='Iphone 10', price=5000, barcode='541234567891', description='desc')
    db.session.add(item1)
    db.session.commit()

if __name__ == '__main__':
    app.run()
