import math

array1 = [1, 6, 3, 3]
array2 = [2, 5, 9, 6]

def pearson_correlation(array1, array2):

    if len(array1) != len(array2):
        raise ValueError("The arrays must be of the same length!")

    n = len(array1)

    mean_x = sum(array1) / n
    mean_y = sum(array2) / n
    numerator = 0    
    variance_x = 0
    variance_y = 0

    for i in range(len(array1)):
        numerator += (array1[i] - mean_x) * (array2[i] - mean_y)
        variance_x += (array1[i] - mean_x)**2 
        variance_y += (array2[i] - mean_y)**2

    denominator = math.sqrt(variance_x * variance_y)    
    return numerator / denominator


correlation = round(pearson_correlation(array1, array2), 5)
print(f"Pearson correlation: {correlation}")