import matplotlib.pyplot as plt

def gender(df):
    # Read the Excel file
    col = 'Gender'
    # Set up the plot figure
    fig, ax = plt.subplots(figsize=(8, 6))

    counts = df[col].value_counts()

    plt.bar(counts.index, counts)

    # Set labels and title
    ax.set_ylabel('Students')
    ax.set_title('Gender Distribution')
    # Remove x-label completely
    ax.set_xlabel('')

    # Adjust the plot layout
    plt.tight_layout()

    # Save the plot to a file
    # Set dpi for higher resolution
    plt.savefig('public/images/gender.png', dpi=300)

    # Close the plot
    plt.close()


# plot('Age', 'Students', 'pie')
# plot('Gender', 'Students', 'bar')
