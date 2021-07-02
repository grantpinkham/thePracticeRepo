package java_sandbox012;

public class Truck extends Vehicle {
    private boolean frontWheel;
    private boolean fourWheel;
    public Truck(int wheels, int seats, boolean frontWheel, boolean fourWheel) {
        super(wheels, 1, seats, false);
    }
    public void carryLoad(int num) {
        System.out.println("Truck.carryLoad() called");
    }

    @Override
    public void move() {
        carryLoad(10);
        super.move();
    }
}
