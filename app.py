from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Todo(db.Model):
    sNo = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(2000), nullable=False)
    agencyName = db.Column(db.String(2000), nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    venue = db.Column(db.String(2000), nullable=False)
    website = db.Column(db.String(2000), nullable=False)
    date = db.Column(db.String(20), nullable=False)

    def __repr__(self)->str:
        return f"{self.sNo}-{self.title}-{self.agencyName}-{self.phone}-{self.venue}-{self.website}-{self.date}"

with app.app_context():
    db.create_all()
    db.session.commit()

class EventSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Todo

    sNo = ma.auto_field()
    title = ma.auto_field()
    agencyName = ma.auto_field()
    phone = ma.auto_field()
    venue = ma.auto_field()
    website = ma.auto_field()
    date = ma.auto_field()


@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method=='POST':
        Title=request.form['title']
        AgencyName=request.form['agencyName']
        Phone = request.form['phone']
        Venue = request.form['venue']
        Website = request.form['website']
        Date = request.form['date']
        query1= Todo(title=Title, agencyName= AgencyName, phone= Phone, venue= Venue, website= Website, date=Date)
        with app.app_context():
            db.session.add(query1)
            db.session.commit()
        return redirect(url_for('/api/dataofsqlalchemy'))
    else:
        return render_template('index.html')

@app.route('/api/dataofsqlalchemy')
def apiGenerator():
    event = Todo.query.all()
    event_schema = EventSchema(many=True)
    output = event_schema.dump(event)
    print(output)
    return jsonify({'event': output})

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')