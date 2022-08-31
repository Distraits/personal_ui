
/** Button type */
export type ButtonType = 'primary' | 'success' | 'danger'

/** Button Component */
export declare class Button {
    /** Button type */
    public type: ButtonType

    /** Determine whether it's a plain button */
    public plain: boolean

    /** Determine whether it's a round button */
    public round: boolean

    /** Disable the button */
    public disabled: boolean
}

