import matplotlib.pyplot as plt
from wordcloud import WordCloud


def generate_wordcloud(df):
    df['Feedback'] = df['Feedback'].astype(str)

    # Create separate dataframes for each sentiment
    positive_df = df[df['Sentiment'] == 1]
    negative_df = df[df['Sentiment'] == -1]

    # Function to generate word clouds
    def generate_word_cloud(text, title):
        wordcloud = WordCloud(width=800, height=400,
                              background_color='white', margin=0).generate(text)

        plt.figure(figsize=(8, 6))
        plt.imshow(wordcloud, interpolation='bilinear')
        plt.axis('off')
        plt.title(title)
        plt.tight_layout(pad=0)
        plt.savefig('files/' + title + '.png', dpi=300, bbox_inches='tight', pad_inches=0)

        plt.close()

    text = ' '.join(df['Feedback'])
    generate_word_cloud(text, 'Overall Sentiment Word Cloud')

    # Generate word cloud for positive sentiment
    positive_text = ' '.join(positive_df['Feedback'])
    generate_word_cloud(positive_text, 'Positive Sentiment Word Cloud')

    # Generate word cloud for negative sentiment
    negative_text = ' '.join(negative_df['Feedback'])
    generate_word_cloud(negative_text, 'Negative Sentiment Word Cloud')

# import matplotlib.pyplot as plt
# from wordcloud import WordCloud


# def generate_wordcloud(df):
#     df['Feedback'] = df['Feedback'].astype(str)

#     # Create separate dataframes for each sentiment
#     positive_df = df[df['Sentiment'] == 1]
#     negative_df = df[df['Sentiment'] == -1]

#     # Function to generate word clouds
#     def generate_word_cloud(text, title):
#         wordcloud = WordCloud(width=800, height=400,
#                               background_color='white').generate(text)

#         plt.figure(figsize=(10, 5))
#         plt.imshow(wordcloud, interpolation='bilinear')
#         plt.axis('off')
#         plt.title(title)
#         plt.tight_layout()
#         plt.savefig('files/' + title + '.png', dpi=300)
#         plt.show()
#         plt.close()

#     text = ' '.join(df['Feedback'])
#     generate_word_cloud(text, 'Overall Sentiment Word Cloud')

#     # Generate word cloud for positive sentiment
#     positive_text = ' '.join(positive_df['Feedback'])
#     generate_word_cloud(positive_text, 'Positive Sentiment Word Cloud')

#     # Generate word cloud for negative sentiment
#     negative_text = ' '.join(negative_df['Feedback'])
#     generate_word_cloud(negative_text, 'Negative Sentiment Word Cloud')

