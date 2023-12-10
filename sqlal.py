from flask import Flask, render_template
import csv

app = Flask(__name__)

@app.route('/')
def display_table():
    # Read the CSV data
    data = []
    with open('analyse2.csv', mode='r', newline='') as csvfile:
        csv_reader = csv.DictReader(csvfile)
        for row in csv_reader:
            data.append(row)

    # Render the HTML template and pass the data
    return render_template('wdc_data.html', items=data)


if __name__ == '__main__':
    app.run(debug=True)
