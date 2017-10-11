//package com.todos.controllers;
//
//
//
//import java.util.Collection;
//import java.util.List;
//import java.util.Locale;
//import java.util.Map;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.MessageSource;
//import org.springframework.stereotype.Component;
//
//@Component
//public class ResultDecoratorHandler {
//	@Autowired
//	private MessageSource messageSource;
//
//	public ResultDecoratorHandler() {
//
//	}
//
//	
//	private ResultDecorator getResultDecorator(Object result, OperationEnum context, String messageCode) {
//		ResultDecorator decorator = new ResultDecorator();
//		decorator.setResult(result);
//		if (result instanceof Boolean) {
//			decorator.setCode(Long.valueOf(ClientServerCodes.IDEAL_CODE));
//			boolean boolResult = Boolean.valueOf(result.toString());
//			
//			if(context.equals(OperationEnum.OTHER) && messageCode.equals("resetPassword")){
//				if (boolResult) {
//					decorator.setCode(ClientServerCodes.IDEAL_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.RESET_SUCCESSFUL_SAVE.getValue(), null, Locale.ENGLISH));
//				} else {
//					decorator.setCode(ClientServerCodes.FAILURE_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.RESET_UNSUCCESSFUL_SAVE.getValue(), null, Locale.ENGLISH));
//				}
//			}
//			if(context.equals(OperationEnum.OTHER) && messageCode.equals("changePassword")){
//				if (boolResult) {
//					decorator.setCode(ClientServerCodes.IDEAL_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.CHANGE_SUCCESSFUL_SAVE.getValue(), null, Locale.ENGLISH));
//				} else {
//					decorator.setCode(ClientServerCodes.FAILURE_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.CHANGE_UNSUCCESSFUL_SAVE.getValue(), null, Locale.ENGLISH));
//				}
//			}
//			if (context.equals(OperationEnum.SAVE)) {
//				if (boolResult) {
//					decorator.setCode(ClientServerCodes.IDEAL_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.SUCCESSFUL_SAVE.getValue(), null, Locale.ENGLISH));
//				} else {
//					decorator.setCode(ClientServerCodes.FAILURE_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.UNSUCCESSFUL_SAVE.getValue(), null, Locale.ENGLISH));
//				}
//			}
//			else if (context.equals(OperationEnum.UPDATE)) {
//				if (boolResult) {
//					decorator.setCode(ClientServerCodes.IDEAL_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.SUCCESSFUL_UPDATE.getValue(), null, Locale.ENGLISH));
//				} else {
//					decorator.setCode(ClientServerCodes.FAILURE_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.UNSUCCESSFUL_UPDATE.getValue(), null, Locale.ENGLISH));
//				}
//			} else if (context.equals(OperationEnum.DELETE)) {
//				if (boolResult) {
//					decorator.setMessage(messageSource.getMessage(CodeEnum.SUCCESSFUL_DELETE.getValue(), null, Locale.ENGLISH));
//				} else {
//					decorator.setMessage(messageSource.getMessage(CodeEnum.UNSUCCESSFUL_DELETE.getValue(), null, Locale.ENGLISH));
//				}
//			} else if (context.equals(OperationEnum.OTHER)) {
//				// TODO: Handle Others
//			}
//
//			return decorator;
//
//		}else if(result instanceof Long){ 
//			Long longResult = Long.valueOf(result.toString());
//			if (context.equals(OperationEnum.SAVE)) {
//				if (longResult != null) {
//					decorator.setCode(ClientServerCodes.IDEAL_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.SUCCESSFUL_SAVE.getValue(), null, Locale.ENGLISH));
//				} else {
//					decorator.setCode(ClientServerCodes.FAILURE_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.UNSUCCESSFUL_SAVE.getValue(), null, Locale.ENGLISH));
//				}
//			} 
//			
//			
//			else if (context.equals(OperationEnum.UPDATE)) {
//				if (longResult != null) {
//					decorator.setCode(ClientServerCodes.IDEAL_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.SUCCESSFUL_UPDATE.getValue(), null, Locale.ENGLISH));
//				} else {
//					decorator.setCode(ClientServerCodes.FAILURE_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.UNSUCCESSFUL_UPDATE.getValue(), null, Locale.ENGLISH));
//				}
//			}
//			else if (context.equals(OperationEnum.FINALIZED)) {
//				if (longResult != null) {
//					decorator.setCode(ClientServerCodes.IDEAL_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.SUCCESSFUL_FINALIZED.getValue(), null, Locale.ENGLISH));
//				} else {
//					decorator.setCode(ClientServerCodes.FAILURE_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.UNSUCCESSFUL_FINALIZED.getValue(), null, Locale.ENGLISH));
//				}
//			} 
//			else if (context.equals(OperationEnum.CANCEL)) {
//				if (longResult != null) {
//					decorator.setCode(ClientServerCodes.IDEAL_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.SUCCESSFUL_CANCEL.getValue(), null, Locale.ENGLISH));
//				} else {
//					decorator.setCode(ClientServerCodes.FAILURE_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.UNSUCCESSFUL_CANCEL.getValue(), null, Locale.ENGLISH));
//				}
//			} 
//			else if (context.equals(OperationEnum.EMAIL)) {
//				if (longResult != null) {
//					decorator.setCode(ClientServerCodes.IDEAL_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.SUCCESSFUL_CANCEL.getValue(), null, Locale.ENGLISH));
//				} else {
//					decorator.setCode(ClientServerCodes.FAILURE_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.UNSUCCESSFUL_CANCEL.getValue(), null, Locale.ENGLISH));
//				}
//			} 
//		}
//		
//		
//		
//		/*else if(result instanceof AttachmentDto){ 
//			Object obj=(Object) result;
//			if (context.equals(OperationEnum.SAVE)) {
//				if (obj != null) {
//					decorator.setCode(ClientServerCodes.IDEAL_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.SUCCESSFUL_SAVE.getValue(), null, Locale.ENGLISH));
//				} else {
//					decorator.setCode(ClientServerCodes.FAILURE_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.UNSUCCESSFUL_SAVE.getValue(), null, Locale.ENGLISH));
//				}
//			} 
//		}*/
//		
//		else if (result instanceof Collection) {
//			Collection c = (Collection) result;
//			if (c.isEmpty()) {
//
//				decorator.setCode(ClientServerCodes.NO_RECORD_CODE);
//				decorator.setMessage(messageSource.getMessage(CodeEnum.GENERIC_NO_REC_FOUND.getValue(), null, Locale.ENGLISH));
//			} else {
//				decorator.setCode(ClientServerCodes.IDEAL_CODE);
//
//				decorator.setMessage(messageSource.getMessage(CodeEnum.GENERIC_TOT_REC_FOUND.getValue(), new Object[] { c.size() }, Locale.ENGLISH));
//			}
//		}else if(result instanceof Object){ 
//			Object obj = (Object) result;
//			if (context.equals(OperationEnum.SAVE)) {
//				if (obj != null) {
//					decorator.setCode(ClientServerCodes.IDEAL_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.SUCCESSFUL_SAVE.getValue(), null, Locale.ENGLISH));
//				} else {
//					decorator.setCode(ClientServerCodes.FAILURE_CODE);
//					decorator.setMessage(messageSource.getMessage(CodeEnum.UNSUCCESSFUL_SAVE.getValue(), null, Locale.ENGLISH));
//				}
//			} else if (context.equals(OperationEnum.SEARCH)) {
//				if (obj != null) {
//					decorator.setCode(ClientServerCodes.IDEAL_CODE);
//				} else {
//					decorator.setCode(ClientServerCodes.FAILURE_CODE);
//				}
//			} 
//		}
//		else if (result instanceof Map) {
//			Map m = (Map) result;
//			if ((m.isEmpty())) {
//
//				decorator.setCode(ClientServerCodes.NO_RECORD_CODE);
//				decorator.setMessage(messageSource.getMessage(CodeEnum.GENERIC_NO_REC_FOUND.getValue(), null, Locale.ENGLISH));
//			} else {
//				decorator.setCode(ClientServerCodes.IDEAL_CODE);
//
//				decorator.setMessage(messageSource.getMessage(CodeEnum.GENERIC_TOT_REC_FOUND.getValue(), new Object[] { m.size() }, Locale.ENGLISH));
//
//			}
//		} else if (result == null) {
//			decorator.setCode(ClientServerCodes.FAILURE_CODE);
//		} else if (result != null) {
//			decorator.setCode(ClientServerCodes.IDEAL_CODE);
//		}
//		
//		if (context != null && context.equals(OperationEnum.COUNT)) {
//			if(result instanceof Long){
//				Long longResult = Long.valueOf(result.toString());
//				if(longResult != null){
//				decorator.setCode(ClientServerCodes.IDEAL_CODE);
//				decorator.setMessage(messageSource.getMessage(CodeEnum.GENERIC_TOT_REC_FOUND.getValue(), new Object[] { 1 }, Locale.ENGLISH));
//
//			}else{
//				decorator.setCode(ClientServerCodes.FAILURE_CODE);
//				decorator.setMessage(messageSource.getMessage(CodeEnum.GENERIC_NO_REC_FOUND.getValue(), null, Locale.ENGLISH));
//
//			}
//				
//		}
//		}
//		
//
//		if (context != null && context.equals(OperationEnum.SEARCH)) {
//			if (result instanceof Collection) {
//
//				List list = (List) result;
//				if (list != null && list.size() > 0) {
//					decorator.setMessage(messageSource.getMessage(CodeEnum.GENERIC_TOT_REC_FOUND.getValue(), new Object[] { Long.valueOf(list.size()) }, Locale.ENGLISH));
//				}
//
//			} else if (result == null) {
//				decorator.setMessage(messageSource.getMessage(CodeEnum.GENERIC_NO_REC_FOUND.getValue(), null, Locale.ENGLISH));
//			}
//
//			else {
//				decorator.setMessage(messageSource.getMessage(CodeEnum.GENERIC_TOT_REC_FOUND.getValue(), new Object[] { 1 }, Locale.ENGLISH));
//			}
//
//		}
//		if (messageCode != null) {
//			decorator.setMessage(messageSource.getMessage(messageCode, null, Locale.ENGLISH));
//		}
//		return decorator;
//
//	}
//
//}
