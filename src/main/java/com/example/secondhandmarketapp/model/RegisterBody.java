package com.example.secondhandmarketapp.model;

public record RegisterBody(
        String email,
        String password,
        String firstName,
        String lastName
) {
}