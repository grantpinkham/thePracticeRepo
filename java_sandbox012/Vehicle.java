package java_sandbox012;

public class Vehicle {
    private int wheels;
    private int body;
    private int seats;
    private boolean speed;

    public Vehicle(int wheels, int body, int seats, boolean speed) {
        this.wheels = wheels;
        this.body = body;
        this.seats = seats;
        this.speed = speed;
    }
    public void move() {
        System.out.println("vehicle.move() called");
    }
    public int getWheels() {
        return wheels;
    }

    public int getBody() {
        return body;
    }

    public int getSeats() {
        return seats;
    }

    public boolean isSpeed() {
        return speed;
    }
}
