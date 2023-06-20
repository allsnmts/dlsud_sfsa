import matplotlib.pyplot as plt


def sections(df):

    col = r'Course/Year/Section (e.g. BCS43)'

    counts = df[col].str.lower().value_counts().head(5)
    top_5_sections = counts.index.astype(str).str.upper()
    # Plotting the bar chart
    plt.bar(top_5_sections, counts)


    plt.title('Sections with most respondents')
    plt.ylabel('Number of Students')
    plt.xlabel('')
    # Adjust the plot layout
    plt.tight_layout()

    # Saving the figure
    plt.savefig('public/images/sections.png', dpi=300)
    # plt.savefig('.png')
    # plt.show()
    plt.close()
