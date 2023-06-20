import matplotlib.pyplot as plt


def year_level(df):

    col = r'Course/Year/Section (e.g. BCS43)'
    course_column = df[col]

    # Counting the number of students in each year level
    year_counts = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0}

    for year in course_column:
        year_level = year[3]
        if len(str(year)) == 4:
            year_level = year[2]

        if year_level in year_counts:
            year_counts[year_level] += 1

    # Creating a bar plot
    years = list(year_counts.keys())
    counts = list(year_counts.values())
    print('years', years)
    print('counts', counts)

    labels = ['1st', '2nd', '3rd', '4th']
    plt.bar(years, counts)
    plt.xlabel('Year Level')
    plt.ylabel('Number of Students')

    plt.title('Number of Students in Each Year Level')
    plt.savefig('public/images/year_level.png', dpi=300)

    # Close the plot
    plt.close()
