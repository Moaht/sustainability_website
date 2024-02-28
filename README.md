# sustainability_website

Website for promoting and gameifying sustainability on University campus

## Setting up

Open your shell and clone into whichever directory you'd like to store the website in.
After cloning, change directory into the generated ```sustainability_website``` directory i.e:
```
cd ./sustainability_website 
```

Your current directory should look something like this:
```
.
├── api
├── db.sqlite3
├── documentation
├── frontend
├── LICENSE
├── manage.py
├── README.md
└── sustainability_website
```

First we set up a virtual environment for the modules that will be used for the project:
``` 
python3 -m venv venv
```

Then we activate the virtual environment:

 - For _Linux_ and _Mac_ run:
``` source ./venv/bin/activate ```

- And on _Windows_ its: 
```.\venv\Scripts\activate```

Then we upgrade pip and install a few modules:
```
python -m pip install --upgrade pip django djangorestframework
```

Next we set up node:
```
cd frontend/ 
npm i
npm run dev
```

Then we set up the database :
```
cd ..
python manage.py migrate 
```

And that's it!

You can run the server now by running :
```python manage.py runserver``` 

>[!TIP]
>You may wish to set up an webmaster admin (superuser) account. 
>To do so, you will need to do:
>```python manage.py createsuperuser``` 
>And follow the instructions provided.

