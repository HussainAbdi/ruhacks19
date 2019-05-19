import tweepy
from textblob import TextBlob

# Twitter API keys
consumer_key= 'XXXXXXXXXXXXXXXXXXX'
consumer_secret= 'XXXXXXXXXXXXXXXXXXX'
access_token='XXXXXXXXXXXXXXXXXXX'
access_token_secret='XXXXXXXXXXXXXXXXXXX'

# For twitter training data
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

# Analyze question using tweepy
for question in question_list: 
    print(question)
    analysis = TextBlob(question.text)
    print(analysis.sentiment)
