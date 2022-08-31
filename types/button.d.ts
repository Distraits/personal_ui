
/** Button type */
export type ButtonType = 'primary' | 'success' | 'danger'

/** Button Component */
export declare class PButton {
    /** Button type */
    type: ButtonType

    /** Determine whether it's a plain button */
    plain: boolean

    /** Determine whether it's a round button */
    round: boolean

    /** Disable the button */
    disabled: boolean
}

