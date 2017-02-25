package com.gb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class GB_Controller {
	
	@RequestMapping("/hello")
	public ModelAndView helloWorld() {
 
		String message = "<br><div style='text-align:center;'>"
				+ "<h3>********** Welcome</h3></div><br><br>";
		return new ModelAndView("", "message", message);
	}
	
	@RequestMapping("/cinema")
	public ModelAndView cinema() {
 
		String message = "<br><div style='text-align:center;'>"
				+ "<h3>**********CINEMA</div><br><br>";
		return new ModelAndView("", "message", message);
	}

}
