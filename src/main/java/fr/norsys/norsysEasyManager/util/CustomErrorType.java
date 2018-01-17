package fr.norsys.norsysEasyManager.util;

public class CustomErrorType {

    private final String errorMessage;

    public CustomErrorType(final String pErrorMessage) {
        this.errorMessage = pErrorMessage;
    }

    public String getErrorMessage() {
        return errorMessage;
    }
}
