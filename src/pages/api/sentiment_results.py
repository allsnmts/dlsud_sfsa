
import matplotlib.pyplot as plt


def sentiments_bar(df):
    # Assuming you have a DataFrame called 'df' with a 'sentiment' column
    sentiment_counts = df['Sentiment'].value_counts()
    print(sentiment_counts)

    # Create a bar plot
    print(sentiment_counts.index)

    # Reorder the index
    sentiment_counts = sentiment_counts.reindex([1, -1])
    sentiment_counts.index = ['Positive', 'Negative']
    plt.bar(sentiment_counts.index, sentiment_counts.values)

    # Set labels and title
    plt.xlabel('Sentiment')
    plt.ylabel('Count')
    plt.title('Sentiment Analysis Results')

    # Remove unnecessary x-labels
    plt.xticks(sentiment_counts.index)
    # Adjust the plot layout
    plt.tight_layout()

    # Show the plot

    plt.savefig('public/images/sentiments_bar.png', dpi=300)

    # Close the plot
    plt.close()


def sentiments_percent(df):
    # Assuming you have a DataFrame called 'df' with a 'sentiment' column
    sentiment_counts = df['Sentiment'].value_counts()
    print(sentiment_counts)

    # Count the number of positive (1) and negative (-1) sentiments
    positive_count = sentiment_counts.get(1, 0)
    negative_count = sentiment_counts.get(-1, 0)

    # Calculate the percentage of positive responses
    total_responses = positive_count + negative_count
    positive_percentage = (positive_count / total_responses) * 100
    negative_percentage = 100 - positive_percentage

    # Create a pie chart
    labels = ['Positive', 'Negative']
    sizes = [positive_percentage, negative_percentage]
    plt.pie(sizes, labels=labels, autopct='%1.1f%%')

    # Set title
    plt.title('Sentiment Analysis Results')

    # Adjust the plot layout
    plt.tight_layout()

    # Show the plot
    plt.savefig('public/images/sentiments_percent.png', dpi=300)
    plt.close()

