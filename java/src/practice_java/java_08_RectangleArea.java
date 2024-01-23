package practice_java;

import java.util.Scanner;
import java.util.ArrayList;

public class java_08_RectangleArea {
    public static void main(String[] args) {
        ArrayList<Rectangle> rectangles = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Please enter the width and height separated by a space (enter 0 0 or negative number to finish):");
            int inputWidth = scanner.nextInt();
            int inputHeight = scanner.nextInt();

            if (inputWidth <= 0 && inputHeight <= 0) {
                System.out.println("Exiting input mode.");
                break;
            }

            Rectangle rectangle = new Rectangle();
            rectangle.setWidth(inputWidth);
            rectangle.setHeight(inputHeight);
            rectangles.add(rectangle);
        }

        System.out.println("Calculating areas of rectangles:");
        for (Rectangle rectangle : rectangles) {
            int width = rectangle.getWidth();
            int height = rectangle.getHeight();
            int area = rectangle.area();
            System.out.println("Rectangle with width " + width + " and height " + height + " has an area of " + area);
        }

        scanner.close();
    }
}

class Rectangle {
    private int width;
    private int height;

    public Rectangle() {
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int area() {
        return width * height;
    }
}
