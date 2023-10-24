package com.cognixia.jump;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class Scheduler {
	
    @Scheduled(fixedRate = 60000) // 60000 milliseconds = 1 minute
    public void runScheduledTask() {
        Date currentDate = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("MM/dd hh:mm a");
        String formattedDate = dateFormat.format(currentDate);
        // Code to be executed periodically
        System.out.println("Scheduled task executed @ " + formattedDate);
    }

    




}
