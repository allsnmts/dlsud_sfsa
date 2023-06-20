import matplotlib.pyplot as plt

def age(df):
    # Read the Excel file
    col = 'Age'
    # Set up the plot figure
    fig, ax = plt.subplots(figsize=(8, 6))

    counts = df[col].value_counts()

    plt.bar(counts.index, counts)
    # Set labels and title
    ax.set_ylabel('Students')
    ax.set_title('Age Distribution')
    # Remove x-label completely
    ax.set_xlabel('')

    # Adjust the plot layout
    plt.tight_layout()

    # Save the plot to a file
    # Set dpi for higher resolution
    plt.savefig('public/images/age.png', dpi=300)

    # Close the plot
    plt.close()
