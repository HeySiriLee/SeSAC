package practice_java;

import java.util.ArrayList;
import java.util.IllformedLocaleException;
import java.util.Scanner;

public class java_07_exception {
    public static void main(String[] args) {
        // Practice 1.
        int[] arr1 = new int[4];

        try {
            for (int i = 0; i <= 5; i++) {
                arr1[i] = i;
                System.out.println("Index " + i + ": " + arr1[i]);
            }
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Index is out of range");
        }

        // Practice 2.
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Enter an array");
            int size2 = scanner.nextInt();
            if (size2 <= 0) {
                throw new
                        IllformedLocaleException("The array must be at least 1 size");
            }
            int[] arr2 = new int[size2];
            System.out.println(size2 + "Enter an integer:");
            int sum = 0;
            for (int i = 0; i < size2; i++) {
                System.out.print("Integer " + (i + 1) + ": ");
                arr2[i] = scanner.nextInt();
                sum += arr2[i];
            }

            double average = (double) sum / size2;
            System.out.println("Average is " + average);
        } catch (java.util.InputMismatchException e) {
            System.out.println("Invalid input format. Please enter an integer.");
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }

        // Practice 3.
        try {
            System.out.print("Enter the size of the array: ");
            int size3 = scanner.nextInt();

            ArrayList<Integer> arr = new ArrayList<>();
            System.out.println("Enter array element:");
            for (int i = 0; i < size3; i++) {
                int element = scanner.nextInt();
                arr.add(element);
            }

            ArrayList<Integer> duplicateElements = new ArrayList<>();

            for (int i = 0; i < arr.size(); i++) {
                int element = arr.get(i);
                for (int j = i + 1; j < arr.size(); j++) {
                    if (element == arr.get(j) && !duplicateElements.contains(element)) {
                        duplicateElements.add(element);
                    }
                }
            }

            Integer[] duplicateArray = duplicateElements.toArray(new Integer[0]);

            if (duplicateArray.length == 0) {
                System.out.println("There are no duplicate elements.");
            } else {
                System.out.print("Duplicate elements: ");
                for (int element : duplicateArray) {
                    System.out.print("[" + element + "] ");
                }
                System.out.println();
            }
        } catch (Exception e) {
            System.out.println("Invalid input. Error: " + e.getMessage());
        } finally {
            scanner.close();
        }
    }
}


