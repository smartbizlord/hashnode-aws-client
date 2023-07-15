/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Like } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LikeUpdateFormInputValues = {};
export declare type LikeUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LikeUpdateFormOverridesProps = {
    LikeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type LikeUpdateFormProps = React.PropsWithChildren<{
    overrides?: LikeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    like?: Like;
    onSubmit?: (fields: LikeUpdateFormInputValues) => LikeUpdateFormInputValues;
    onSuccess?: (fields: LikeUpdateFormInputValues) => void;
    onError?: (fields: LikeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LikeUpdateFormInputValues) => LikeUpdateFormInputValues;
    onValidate?: LikeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LikeUpdateForm(props: LikeUpdateFormProps): React.ReactElement;
